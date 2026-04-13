window.onload = function() {
    initTabs();
    shotPage = new ShotPage();
    matrixPage = new MatrixPage();
    calculatorPage = new CalculatorPage();
    graph2DPage = new Graph2DPage();

    shotPage.init();
    matrixPage.init();
    calculatorPage.init();
    graph2DPage.init();
}