from pathlib import Path

import dash_html_components as html
import dash_bootstrap_components as dbc

from .alerts import alerts
from .badges import badges

from .helpers import HighlightedSource, load_source_with_app

from typing import NamedTuple

HERE = Path(__file__).parent

GITHUB_LINK = "https://github.com/ASIDataScience/dash-bootstrap-components"

alerts_source = (HERE / "alerts.py").open().read()
badges_source = (HERE / "badges.py").open().read()
collapse_source = (HERE / "collapse.py").open().read()

NAVBAR = dbc.Navbar(
    brand="Dash Bootstrap Components",
    brand_href="/",
    brand_external_link=True,
    sticky="top",
    children=[dbc.NavItem(dbc.NavLink("GitHub", href=GITHUB_LINK))],
)


class SidebarEntry(NamedTuple):
    slug: str  # identifier corresponding to this entry
    heading: str


sidebar_entries = [
    SidebarEntry("alerts", "Alerts"),
    SidebarEntry("badges", "Badges"),
    SidebarEntry("collapse", "Collapse"),
]


def sidebar(active_item):
    header = html.H1("Components", className="h5")
    items = [
        sidebar_item(
            entry.heading,
            f"/l/components/{entry.slug}",
            active_item == entry.slug,
        )
        for entry in sidebar_entries
    ]
    nav = dbc.Nav(items, className="flex-column")
    return [header, nav]


def sidebar_item(heading, location, is_active):
    return dbc.NavItem(dbc.NavLink(heading, href=location, active=is_active))


def component_page(body_elements, active_item):
    sidebar_contents = sidebar(active_item)
    body_column = dbc.Col(body_elements, md=9)
    sidebar_column = dbc.Col(sidebar_contents, md=3, className="docs-sidebar")
    page_body = dbc.Container(
        dbc.Row([body_column, sidebar_column]), className="docs-content"
    )
    return [NAVBAR, page_body]


class ComponentsPage:
    def __init__(self, app):
        self._app = app
        self._component_bodies = {
            "alerts": [alerts, HighlightedSource(alerts_source)],
            "badges": [badges, HighlightedSource(badges_source)],
            "collapse": [
                load_source_with_app(self._app, collapse_source, "collapse"),
                HighlightedSource(collapse_source)
            ]
        }

    def for_path(self, path_components):
        try:
            component_name = path_components[0]
            component_body = self._component_bodies[component_name]
            return component_page(component_body, component_name)
        except IndexError:
            return self.for_path(["alerts"])
