from dash import Dash, html
from dash_bootstrap_components import (
    Popover,
    PopoverBody,
    PopoverHeader,
    themes,
)
from selenium.webdriver.common.action_chains import ActionChains


def test_dbpo001_popover_click(dash_duo):
    app = Dash(external_stylesheets=[themes.BOOTSTRAP])

    app.layout = html.Div(
        [
            Popover(
                [PopoverHeader("Test Header"), PopoverBody("Test content")],
                id="popover",
                target="popover-target",
                trigger="click",
            ),
            html.Div("Target", id="popover-target"),
        ],
        className="container p-5",
    )

    dash_duo.start_server(app)

    dash_duo.wait_for_element_by_id("popover-target").click()
    dash_duo.wait_for_text_to_equal(".popover-body", "Test content", timeout=4)


def test_dbpo002_popover_hover(dash_duo):
    app = Dash(external_stylesheets=[themes.BOOTSTRAP])

    app.layout = html.Div(
        [
            Popover(
                [PopoverHeader("Test Header"), PopoverBody("Test content")],
                id="popover",
                target="popover-target",
                trigger="hover",
            ),
            html.Div("Target", id="popover-target"),
        ],
        className="container p-5",
    )

    dash_duo.start_server(app)

    hover = ActionChains(dash_duo.driver).move_to_element(
        dash_duo.wait_for_element_by_id("popover-target")
    )
    hover.perform()
    dash_duo.wait_for_text_to_equal(".popover-body", "Test content", timeout=4)
