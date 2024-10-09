from flask import Flask, render_template, request
import sympy as sp
from sympy.parsing.latex import parse_latex
from itertools import combinations

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    results = {}
    error = None
    if request.method == 'POST':
        function_latex = request.form.get('function', '')
        try:
            # Parse LaTeX to SymPy expression
            function = parse_latex(function_latex)
            # Identify all variables (symbols) in the function
            variables = sorted(function.free_symbols, key=lambda s: s.name)
            if not variables:
                raise ValueError("No variables found in the function.")

            # Compute first partial derivatives
            first_partials = {str(var): sp.latex(sp.simplify(sp.factor((function.diff(var))))) for var in variables}

            # Compute second pure partial derivatives
            second_pure_partials = {str(var): sp.latex(sp.simplify(sp.factor(function.diff(var, var)))) for var in variables}

            # Compute second mixed partial derivatives
            second_mixed_partials = {}
            for var1, var2 in combinations(variables, 2):
                derivative = sp.latex(sp.simplify(sp.factor(function.diff(var1, var2))))
                second_mixed_partials[f"{var1} {var2}"] = derivative
                # If you want to include both (x,y) and (y,x), uncomment the next line
                # second_mixed_partials[f"{var2} {var1}"] = derivative

            # Convert results to LaTeX
            results = {
                'function': sp.latex(function),
                'variables': [str(var) for var in variables],
                'first_partials': first_partials,
                'second_pure_partials': second_pure_partials,
                'second_mixed_partials': second_mixed_partials
            }
        except Exception as e:
            error = f"Error: {str(e)}"
    return render_template('index.html', results=results, error=error)

if __name__ == '__main__':
    app.run(debug=True)
