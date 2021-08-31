import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {omit} from 'ramda';
import RBToast from 'react-bootstrap/Toast';

/**
 * Toasts can be used to push messages and notifactions to users. Control
 * visibility of the toast with the `is_open` prop, or use `duration` to set a
 * timer for auto-dismissal.
 */
const Toast = props => {
  const {
    children,
    header,
    icon,
    header_style,
    headerClassName,
    header_class_name,
    body_style,
    bodyClassName,
    body_class_name,
    dismissable,
    duration,
    n_dismiss,
    is_open,
    setProps,
    className,
    class_name,
    color,
    ...otherProps
  } = props;

  const dismiss = () => {
    if (setProps) {
      setProps({
        is_open: false,
        n_dismiss: n_dismiss + 1,
        n_dismiss_timestamp: Date.now()
      });
    }
  };

  const timeout = useRef(null);

  useEffect(() => {
    if (duration) {
      if (is_open) {
        timeout.current = setTimeout(dismiss, duration);
      } else if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    }
  }, [is_open]);

  return (
    <RBToast
      show={is_open}
      onClose={dismissable && dismiss}
      className={class_name || className}
      bg={color}
      {...omit(['n_dismiss_timestamp'], otherProps)}
    >
      <RBToast.Header
        style={header_style}
        className={header_class_name || headerClassName}
        closeButton={dismissable}
      >
        {icon && (
          <svg
            className={`rounded text-${icon}`}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect fill="currentColor" width="100%" height="100%"></rect>
          </svg>
        )}
        <strong className={classNames('me-auto', icon && 'ms-2')}>
          {header}
        </strong>
      </RBToast.Header>
      <RBToast.Body
        style={body_style}
        className={body_class_name || bodyClassName}
      >
        {children}
      </RBToast.Body>
    </RBToast>
  );
};

Toast.defaultProps = {
  is_open: true,
  n_dismiss: 0,
  n_dismiss_timestamp: -1,
  dismissable: false
};

Toast.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  class_name: PropTypes.string,

  /**
   * **DEPRECATED** Use `class_name` instead.
   *
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * Defines CSS styles which will override styles previously set. The styles
   * set here apply to the header of the toast.
   */
  header_style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties. The classes
   * specified with this prop will be applied to the header of the toast.
   */
  header_class_name: PropTypes.string,

  /**
   * **DEPRECATED** - use `header_class_name` instead
   *
   * Often used with CSS to style elements with common properties. The classes
   * specified with this prop will be applied to the header of the toast.
   */
  headerClassName: PropTypes.string,

  /**
   * Defines CSS styles which will override styles previously set. The styles
   * set here apply to the body of the toast.
   */
  body_style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties. The classes
   * specified with this prop will be applied to the body of the toast.
   */
  body_class_name: PropTypes.string,

  /**
   * **DEPRECATED** - use `body_class_name` instead.
   *
   * Often used with CSS to style elements with common properties. The classes
   * specified with this prop will be applied to the body of the toast.
   */
  bodyClassName: PropTypes.string,

  /**
   * HTML tag to use for the Toast, default: div
   */
  tag: PropTypes.string,

  /**
   * Whether Toast is currently open.
   */
  is_open: PropTypes.bool,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: PropTypes.string,

  /**
   * Text to populate the header with
   */
  header: PropTypes.string,

  /**
   * Set to True to add a dismiss button to the header which will close the
   * toast on click
   */
  dismissable: PropTypes.bool,

  /**
   * Duration in milliseconds after which the Alert dismisses itself.
   */
  duration: PropTypes.number,

  /**
   * An integer that represents the number of times that the dismiss button has
   * been clicked on.
   */
  n_dismiss: PropTypes.number,

  /**
   * Use of *_timestamp props has been deprecated in Dash in favour of dash.callback_context.
   * See "How do I determine which Input has changed?" in the Dash FAQs https://dash.plot.ly/faqs.
   *
   * An integer that represents the time (in ms since 1970) at which n_dismiss
   * changed. This can be used to tell which button was changed most recently.
   */
  n_dismiss_timestamp: PropTypes.number,

  /**
   * Add a contextually coloured icon to the header of the toast. Options are:
   * "primary", "secondary", "success", "warning", "danger", "info", "light" or
   * "dark".
   */
  icon: PropTypes.string,

  /**
   * Toast color, options: primary, secondary, success, info, warning, danger,
   * light, dark. Default: secondary.
   */
  color: PropTypes.string
};

export default Toast;