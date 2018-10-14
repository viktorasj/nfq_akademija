<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb
{
    public static $prefixLengthsPsr4 = array (
        'v' => 
        array (
            'vic\\src\\' => 8,
        ),
        'M' => 
        array (
            'MathPHP\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'vic\\src\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'MathPHP\\' => 
        array (
            0 => __DIR__ . '/..' . '/markrogoyski/math-php/src',
        ),
    );

    public static $classMap = array (
        'MathPHP\\Algebra' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Algebra.php',
        'MathPHP\\Arithmetic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Arithmetic.php',
        'MathPHP\\Exception\\BadDataException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/BadDataException.php',
        'MathPHP\\Exception\\BadParameterException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/BadParameterException.php',
        'MathPHP\\Exception\\IncorrectTypeException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/IncorrectTypeException.php',
        'MathPHP\\Exception\\MathException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/MathException.php',
        'MathPHP\\Exception\\MatrixException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/MatrixException.php',
        'MathPHP\\Exception\\OutOfBoundsException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/OutOfBoundsException.php',
        'MathPHP\\Exception\\SingularMatrixException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/SingularMatrixException.php',
        'MathPHP\\Exception\\VectorException' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Exception/VectorException.php',
        'MathPHP\\Finance' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Finance.php',
        'MathPHP\\Functions\\Arithmetic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Arithmetic.php',
        'MathPHP\\Functions\\Bitwise' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Bitwise.php',
        'MathPHP\\Functions\\Map\\Multi' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Map/Multi.php',
        'MathPHP\\Functions\\Map\\Single' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Map/Single.php',
        'MathPHP\\Functions\\Piecewise' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Piecewise.php',
        'MathPHP\\Functions\\Polynomial' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Polynomial.php',
        'MathPHP\\Functions\\Special' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Special.php',
        'MathPHP\\Functions\\Support' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Functions/Support.php',
        'MathPHP\\InformationTheory\\Entropy' => __DIR__ . '/..' . '/markrogoyski/math-php/src/InformationTheory/Entropy.php',
        'MathPHP\\LinearAlgebra\\ColumnVector' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/ColumnVector.php',
        'MathPHP\\LinearAlgebra\\DiagonalMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/DiagonalMatrix.php',
        'MathPHP\\LinearAlgebra\\Eigenvalue' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/Eigenvalue.php',
        'MathPHP\\LinearAlgebra\\Eigenvector' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/Eigenvector.php',
        'MathPHP\\LinearAlgebra\\FunctionMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/FunctionMatrix.php',
        'MathPHP\\LinearAlgebra\\FunctionSquareMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/FunctionSquareMatrix.php',
        'MathPHP\\LinearAlgebra\\Matrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/Matrix.php',
        'MathPHP\\LinearAlgebra\\MatrixFactory' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/MatrixFactory.php',
        'MathPHP\\LinearAlgebra\\ObjectSquareMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/ObjectSquareMatrix.php',
        'MathPHP\\LinearAlgebra\\RowVector' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/RowVector.php',
        'MathPHP\\LinearAlgebra\\SquareMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/SquareMatrix.php',
        'MathPHP\\LinearAlgebra\\VandermondeMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/VandermondeMatrix.php',
        'MathPHP\\LinearAlgebra\\VandermondeSquareMatrix' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/VandermondeSquareMatrix.php',
        'MathPHP\\LinearAlgebra\\Vector' => __DIR__ . '/..' . '/markrogoyski/math-php/src/LinearAlgebra/Vector.php',
        'MathPHP\\NumberTheory\\Integer' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumberTheory/Integer.php',
        'MathPHP\\Number\\Complex' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Number/Complex.php',
        'MathPHP\\Number\\ObjectArithmetic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Number/ObjectArithmetic.php',
        'MathPHP\\Number\\Rational' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Number/Rational.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\ClampedCubicSpline' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/ClampedCubicSpline.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\Interpolation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/Interpolation.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\LagrangePolynomial' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/LagrangePolynomial.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\NaturalCubicSpline' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/NaturalCubicSpline.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\NevillesMethod' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/NevillesMethod.php',
        'MathPHP\\NumericalAnalysis\\Interpolation\\NewtonPolynomialForward' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/Interpolation/NewtonPolynomialForward.php',
        'MathPHP\\NumericalAnalysis\\NumericalDifferentiation\\FivePointFormula' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalDifferentiation/FivePointFormula.php',
        'MathPHP\\NumericalAnalysis\\NumericalDifferentiation\\NumericalDifferentiation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalDifferentiation/NumericalDifferentiation.php',
        'MathPHP\\NumericalAnalysis\\NumericalDifferentiation\\SecondDerivativeMidpointFormula' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalDifferentiation/SecondDerivativeMidpointFormula.php',
        'MathPHP\\NumericalAnalysis\\NumericalDifferentiation\\ThreePointFormula' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalDifferentiation/ThreePointFormula.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\BoolesRule' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/BoolesRule.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\MidpointRule' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/MidpointRule.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\NumericalIntegration' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/NumericalIntegration.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\RectangleMethod' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/RectangleMethod.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\SimpsonsRule' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/SimpsonsRule.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\SimpsonsThreeEighthsRule' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/SimpsonsThreeEighthsRule.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\TrapezoidalRule' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/TrapezoidalRule.php',
        'MathPHP\\NumericalAnalysis\\NumericalIntegration\\Validation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/NumericalIntegration/Validation.php',
        'MathPHP\\NumericalAnalysis\\RootFinding\\BisectionMethod' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/RootFinding/BisectionMethod.php',
        'MathPHP\\NumericalAnalysis\\RootFinding\\FixedPointIteration' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/RootFinding/FixedPointIteration.php',
        'MathPHP\\NumericalAnalysis\\RootFinding\\NewtonsMethod' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/RootFinding/NewtonsMethod.php',
        'MathPHP\\NumericalAnalysis\\RootFinding\\SecantMethod' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/RootFinding/SecantMethod.php',
        'MathPHP\\NumericalAnalysis\\RootFinding\\Validation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/NumericalAnalysis/RootFinding/Validation.php',
        'MathPHP\\Probability\\Combinatorics' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Combinatorics.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Beta' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Beta.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Cauchy' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Cauchy.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\ChiSquared' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/ChiSquared.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Continuous' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Continuous.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\ContinuousDistribution' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/ContinuousDistribution.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\DiracDelta' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/DiracDelta.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Exponential' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Exponential.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\F' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/F.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Gamma' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Gamma.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Laplace' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Laplace.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\LogLogistic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/LogLogistic.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\LogNormal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/LogNormal.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Logistic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Logistic.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\NoncentralT' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/NoncentralT.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Normal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Normal.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Pareto' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Pareto.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\StandardNormal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/StandardNormal.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\StudentT' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/StudentT.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Uniform' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Uniform.php',
        'MathPHP\\Probability\\Distribution\\Continuous\\Weibull' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Continuous/Weibull.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Bernoulli' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Bernoulli.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Binomial' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Binomial.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Categorical' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Categorical.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Discrete' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Discrete.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Geometric' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Geometric.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Hypergeometric' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Hypergeometric.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Multinomial' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Multinomial.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\NegativeBinomial' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/NegativeBinomial.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Pascal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Pascal.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Poisson' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Poisson.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\ShiftedGeometric' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/ShiftedGeometric.php',
        'MathPHP\\Probability\\Distribution\\Discrete\\Uniform' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Discrete/Uniform.php',
        'MathPHP\\Probability\\Distribution\\Distribution' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Distribution.php',
        'MathPHP\\Probability\\Distribution\\Multivariate\\Dirichlet' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Multivariate/Dirichlet.php',
        'MathPHP\\Probability\\Distribution\\Multivariate\\Normal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Multivariate/Normal.php',
        'MathPHP\\Probability\\Distribution\\Table\\ChiSquared' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Table/ChiSquared.php',
        'MathPHP\\Probability\\Distribution\\Table\\StandardNormal' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Table/StandardNormal.php',
        'MathPHP\\Probability\\Distribution\\Table\\TDistribution' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Probability/Distribution/Table/TDistribution.php',
        'MathPHP\\Sequence\\Advanced' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Sequence/Advanced.php',
        'MathPHP\\Sequence\\Basic' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Sequence/Basic.php',
        'MathPHP\\SetTheory\\ImmutableSet' => __DIR__ . '/..' . '/markrogoyski/math-php/src/SetTheory/ImmutableSet.php',
        'MathPHP\\SetTheory\\Set' => __DIR__ . '/..' . '/markrogoyski/math-php/src/SetTheory/Set.php',
        'MathPHP\\Statistics\\ANOVA' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/ANOVA.php',
        'MathPHP\\Statistics\\Average' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Average.php',
        'MathPHP\\Statistics\\Circular' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Circular.php',
        'MathPHP\\Statistics\\Correlation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Correlation.php',
        'MathPHP\\Statistics\\Descriptive' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Descriptive.php',
        'MathPHP\\Statistics\\Distance' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Distance.php',
        'MathPHP\\Statistics\\Distribution' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Distribution.php',
        'MathPHP\\Statistics\\EffectSize' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/EffectSize.php',
        'MathPHP\\Statistics\\Experiment' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Experiment.php',
        'MathPHP\\Statistics\\KernelDensityEstimation' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/KernelDensityEstimation.php',
        'MathPHP\\Statistics\\RandomVariable' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/RandomVariable.php',
        'MathPHP\\Statistics\\Regression\\HanesWoolf' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/HanesWoolf.php',
        'MathPHP\\Statistics\\Regression\\LOESS' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/LOESS.php',
        'MathPHP\\Statistics\\Regression\\Linear' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Linear.php',
        'MathPHP\\Statistics\\Regression\\LinearThroughPoint' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/LinearThroughPoint.php',
        'MathPHP\\Statistics\\Regression\\LineweaverBurk' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/LineweaverBurk.php',
        'MathPHP\\Statistics\\Regression\\Methods\\LeastSquares' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Methods/LeastSquares.php',
        'MathPHP\\Statistics\\Regression\\Methods\\WeightedLeastSquares' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Methods/WeightedLeastSquares.php',
        'MathPHP\\Statistics\\Regression\\Models\\LinearModel' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Models/LinearModel.php',
        'MathPHP\\Statistics\\Regression\\Models\\MichaelisMenten' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Models/MichaelisMenten.php',
        'MathPHP\\Statistics\\Regression\\Models\\PowerModel' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Models/PowerModel.php',
        'MathPHP\\Statistics\\Regression\\NonParametricRegression' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/NonParametricRegression.php',
        'MathPHP\\Statistics\\Regression\\ParametricRegression' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/ParametricRegression.php',
        'MathPHP\\Statistics\\Regression\\PowerLaw' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/PowerLaw.php',
        'MathPHP\\Statistics\\Regression\\Regression' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/Regression.php',
        'MathPHP\\Statistics\\Regression\\TheilSen' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/TheilSen.php',
        'MathPHP\\Statistics\\Regression\\WeightedLinear' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Regression/WeightedLinear.php',
        'MathPHP\\Statistics\\Significance' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Statistics/Significance.php',
        'MathPHP\\Trigonometry' => __DIR__ . '/..' . '/markrogoyski/math-php/src/Trigonometry.php',
        'vic\\src\\MatrixInfo' => __DIR__ . '/../..' . '/src/MatrixInfo.php',
        'vic\\src\\StringEditor' => __DIR__ . '/../..' . '/src/StringsEditor.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$classMap;

        }, null, ClassLoader::class);
    }
}
