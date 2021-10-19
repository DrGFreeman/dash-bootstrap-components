# AUTO GENERATED FILE - DO NOT EDIT

export dbc_toast

"""
    dbc_toast(;kwargs...)
    dbc_toast(children::Any;kwargs...)
    dbc_toast(children_maker::Function;kwargs...)


A Toast component.
Toasts can be used to push messages and notifactions to users. Control
visibility of the toast with the `is_open` prop, or use `duration` to set a
timer for auto-dismissal.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children of this component
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `bodyClassName` (String; optional): **DEPRECATED** - use `body_class_name` instead.

Often used with CSS to style elements with common properties. The classes
specified with this prop will be applied to the body of the toast.
- `body_class_name` (String; optional): Often used with CSS to style elements with common properties. The classes
specified with this prop will be applied to the body of the toast.
- `body_style` (Dict; optional): Defines CSS styles which will override styles previously set. The styles
set here apply to the body of the toast.
- `className` (String; optional): **DEPRECATED** Use `class_name` instead.

Often used with CSS to style elements with common properties.
- `class_name` (String; optional): Often used with CSS to style elements with common properties.
- `color` (String; optional): Toast color, options: primary, secondary, success, info, warning, danger,
light, dark. Default: secondary.
- `dismissable` (Bool; optional): Set to True to add a dismiss button to the header which will close the
toast on click
- `duration` (Real; optional): Duration in milliseconds after which the Alert dismisses itself.
- `header` (String; optional): Text to populate the header with
- `headerClassName` (String; optional): **DEPRECATED** - use `header_class_name` instead

Often used with CSS to style elements with common properties. The classes
specified with this prop will be applied to the header of the toast.
- `header_class_name` (String; optional): Often used with CSS to style elements with common properties. The classes
specified with this prop will be applied to the header of the toast.
- `header_style` (Dict; optional): Defines CSS styles which will override styles previously set. The styles
set here apply to the header of the toast.
- `icon` (String; optional): Add a contextually coloured icon to the header of the toast. Options are:
"primary", "secondary", "success", "warning", "danger", "info", "light" or
"dark".
- `is_open` (Bool; optional): Whether Toast is currently open.
- `key` (String; optional): A unique identifier for the component, used to improve
performance by React.js while rendering components
See https://reactjs.org/docs/lists-and-keys.html for more info
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `n_dismiss` (Real; optional): An integer that represents the number of times that the dismiss button has
been clicked on.
- `n_dismiss_timestamp` (Real; optional): Use of *_timestamp props has been deprecated in Dash in favour of dash.callback_context.
See "How do I determine which Input has changed?" in the Dash FAQs https://dash.plot.ly/faqs.

An integer that represents the time (in ms since 1970) at which n_dismiss
changed. This can be used to tell which button was changed most recently.
- `style` (Dict; optional): Defines CSS styles which will override styles previously set.
- `tag` (String; optional): HTML tag to use for the Toast, default: div
"""
function dbc_toast(; kwargs...)
        available_props = Symbol[:children, :id, :bodyClassName, :body_class_name, :body_style, :className, :class_name, :color, :dismissable, :duration, :header, :headerClassName, :header_class_name, :header_style, :icon, :is_open, :key, :loading_state, :n_dismiss, :n_dismiss_timestamp, :style, :tag]
        wild_props = Symbol[]
        return Component("dbc_toast", "Toast", "dash_bootstrap_components", available_props, wild_props; kwargs...)
end

dbc_toast(children::Any; kwargs...) = dbc_toast(;kwargs..., children = children)
dbc_toast(children_maker::Function; kwargs...) = dbc_toast(children_maker(); kwargs...)

