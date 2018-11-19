<?php

/* home/index.html.twig */
class __TwigTemplate_07f2e996048597a9bb7d44bd615b9b42c4418d1ababc8905e33ecb29cf386416 extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "home/index.html.twig", 1);
        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'calendar' => array($this, 'block_calendar'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = array())
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Big Fishes";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 4
    public function block_calendar($context, array $blocks = array())
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "calendar"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 7
    public function block_body($context, array $blocks = array())
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 8
        echo "    <div class=\"container-fluid\">
        <header class=\"row\" style=\"height: 95px;\">

        </header>
        <main>
            <div class=\"row mt-3\">
                <div class=\"col-sm-4 ml-5\">
                    <img data-bg_fill=\"rgba(227, 201, 26, 0.5)\" src=\"./images/tvenkinys.jpg\" width=\"616\" height=\"606\" border=\"0\" usemap=\"#pond\">
                    <map name=\"pond\">
                        <area class=\"harea tooltip\" sector=\"first\" shape=\"poly\" coords=\"361,395,359,353,357,313,355,275,355,258,368,256,382,252,395,251,408,249,420,248,432,248,443,247,450,250,456,253,458,259,462,267,464,273,466,281,466,289,470,299,474,310,478,321,480,331,482,338,485,342,397,379,372,390\" >
                        <area class=\"harea tooltip\" sector=\"second\" shape=\"poly\" coords=\"361,397,256,370,245,266,254,266,266,264,273,262,282,263,290,261,296,262,304,261,310,260,318,260,328,260,336,258,344,258,355,258\">
                        <area class=\"harea tooltip\" sector=\"third\" shape=\"poly\" coords=\"257,369,246,266,226,269,208,271,194,272,180,275,162,278,148,279,138,282,128,284,118,286,108,290,100,296,89,302,80,311,72,320,65,330,60,338,53,345,64,359,73,368,82,376,91,387,102,397,111,407,120,417,129,426,137,433,144,441\">
                        <area class=\"harea tooltip\" sector=\"fourth\" shape=\"poly\" coords=\"144,440,157,450,165,457,176,464,189,471,199,476,207,482,215,486,222,491,362,396,257,368\">
                        <area class=\"harea tooltip\" sector=\"fifth\" shape=\"poly\" coords=\"224,490,235,496,247,502,258,506,268,509,275,512,283,518,291,527,403,447,362,396\">
                        <area class=\"harea tooltip\" sector=\"sixth\" shape=\"poly\" coords=\"291,527,303,532,309,539,315,547,325,556,334,566,340,571,349,574,358,575,368,573,378,570,391,566,403,563,416,558,428,557,438,555,447,553,455,549,466,546,480,542,493,540,504,537,512,535,520,532,527,531,533,527,533,519,530,508,527,495,523,483,520,471,518,460,515,448,510,442,512,434,508,427,506,421,507,415,401,447\">
                        <area class=\"harea tooltip\" sector=\"seventh\" shape=\"poly\" coords=\"361,395,483,341,486,350,489,357,490,365,491,374,495,379,498,386,499,393,502,401,503,407,506,415,403,447\">
                    </map>
                </div>
                <div class=\"col-sm-7 p-3\">
                    ";
        // line 27
        echo twig_include($this->env, $context, "calendar.twig");
        echo "
                </div>
            </div>
            <div class=\"row mt-5\">
                <div class=\"col-sm-12\">

                </div>
            </div>
        </main>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "home/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  90 => 27,  69 => 8,  63 => 7,  52 => 4,  40 => 3,  15 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends 'base.html.twig' %}

{% block title %}Big Fishes{% endblock %}
{% block calendar %}{% endblock %}


{% block body %}
    <div class=\"container-fluid\">
        <header class=\"row\" style=\"height: 95px;\">

        </header>
        <main>
            <div class=\"row mt-3\">
                <div class=\"col-sm-4 ml-5\">
                    <img data-bg_fill=\"rgba(227, 201, 26, 0.5)\" src=\"./images/tvenkinys.jpg\" width=\"616\" height=\"606\" border=\"0\" usemap=\"#pond\">
                    <map name=\"pond\">
                        <area class=\"harea tooltip\" sector=\"first\" shape=\"poly\" coords=\"361,395,359,353,357,313,355,275,355,258,368,256,382,252,395,251,408,249,420,248,432,248,443,247,450,250,456,253,458,259,462,267,464,273,466,281,466,289,470,299,474,310,478,321,480,331,482,338,485,342,397,379,372,390\" >
                        <area class=\"harea tooltip\" sector=\"second\" shape=\"poly\" coords=\"361,397,256,370,245,266,254,266,266,264,273,262,282,263,290,261,296,262,304,261,310,260,318,260,328,260,336,258,344,258,355,258\">
                        <area class=\"harea tooltip\" sector=\"third\" shape=\"poly\" coords=\"257,369,246,266,226,269,208,271,194,272,180,275,162,278,148,279,138,282,128,284,118,286,108,290,100,296,89,302,80,311,72,320,65,330,60,338,53,345,64,359,73,368,82,376,91,387,102,397,111,407,120,417,129,426,137,433,144,441\">
                        <area class=\"harea tooltip\" sector=\"fourth\" shape=\"poly\" coords=\"144,440,157,450,165,457,176,464,189,471,199,476,207,482,215,486,222,491,362,396,257,368\">
                        <area class=\"harea tooltip\" sector=\"fifth\" shape=\"poly\" coords=\"224,490,235,496,247,502,258,506,268,509,275,512,283,518,291,527,403,447,362,396\">
                        <area class=\"harea tooltip\" sector=\"sixth\" shape=\"poly\" coords=\"291,527,303,532,309,539,315,547,325,556,334,566,340,571,349,574,358,575,368,573,378,570,391,566,403,563,416,558,428,557,438,555,447,553,455,549,466,546,480,542,493,540,504,537,512,535,520,532,527,531,533,527,533,519,530,508,527,495,523,483,520,471,518,460,515,448,510,442,512,434,508,427,506,421,507,415,401,447\">
                        <area class=\"harea tooltip\" sector=\"seventh\" shape=\"poly\" coords=\"361,395,483,341,486,350,489,357,490,365,491,374,495,379,498,386,499,393,502,401,503,407,506,415,403,447\">
                    </map>
                </div>
                <div class=\"col-sm-7 p-3\">
                    {{ include('calendar.twig') }}
                </div>
            </div>
            <div class=\"row mt-5\">
                <div class=\"col-sm-12\">

                </div>
            </div>
        </main>
    </div>
{% endblock %}
", "home/index.html.twig", "/code/templates/home/index.html.twig");
    }
}
