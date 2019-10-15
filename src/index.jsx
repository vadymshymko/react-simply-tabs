import React, { Fragment, Children, memo } from 'react';
import PropTypes from 'prop-types';

const renderControls = ({
  activeControlProps,
  activeTabIndex,
  controls,
  onRequestChange,
}) => (
  controls.map((control, index) => {
    const {
      tabIndex: controlIndex = index,
      ...controlProps
    } = control.props || {};

    const key = control.key || controlIndex;
    const isActive = controlIndex === activeTabIndex;

    const controlClassName = controlProps.className || '';
    const activeControlClassName = activeControlProps.className || '';
    const className = `${controlClassName} ${isActive ? activeControlClassName : ''}`;

    const controlStyle = controlProps.style || {};
    const activeControlStyle = activeControlProps.style || {};
    const style = {
      ...controlStyle,
      ...(isActive ? activeControlStyle : {}),
    };

    const onClick = (event) => {
      onRequestChange(controlIndex);

      if (controlProps.onClick) {
        controlProps.onClick(event);
      }
    };

    const props = {
      ...controlProps,
      ...(isActive
        ? activeControlProps
        : {}
      ),
      className,
      style,
      onClick,
    };

    return {
      ...control,
      props,
      key,
    };
  })
);

const renderTabs = ({
  activeTabIndex,
  activeTabProps,
  hiddenTabProps,
  renderOnlyActiveTab,
  tabs,
}) => (
  tabs.map((tab, tabIndex) => {
    const key = tab.key || tabIndex;
    const isActive = tabIndex === activeTabIndex;

    if (renderOnlyActiveTab && !isActive) {
      return <Fragment key={key} />;
    }

    const tabProps = tab.props || {};

    const tabClassName = tabProps.className || '';
    const activeTabClassName = activeTabProps.className || '';
    const hiddenTabClassName = hiddenTabProps.className || '';
    const className = `${tabClassName} ${isActive ? activeTabClassName : hiddenTabClassName}`;

    const tabStyle = tabProps.style || {};
    const activeTabStyle = activeTabProps.style || {};
    const hiddenTabStyle = hiddenTabProps.style || {};
    const style = {
      ...tabStyle,
      ...(isActive ? activeTabStyle : hiddenTabStyle),
    };

    const props = {
      ...tabProps,
      ...(isActive
        ? activeTabProps
        : hiddenTabProps
      ),
      className,
      style,
    };

    return {
      ...tab,
      props,
      key,
    };
  })
);

const ReactSimplyTabs = memo(({
  activeControlProps,
  activeTabIndex,
  activeTabProps,
  children,
  controls,
  controlsWrapperProps,
  hiddenTabProps,
  onRequestChange,
  renderOnlyActiveTab,
  tabsWrapperProps,
  wrapperProps,
}) => {
  const tabs = Children.toArray(children);
  const validActiveTabIndex = tabs[activeTabIndex] ? activeTabIndex : 0;

  return (
    <div {...wrapperProps}>
      {controls.length > 0 && (
        <div {...controlsWrapperProps}>
          {renderControls({
            activeControlProps,
            activeTabIndex: validActiveTabIndex,
            controls,
            onRequestChange,
          })}
        </div>
      )}

      {tabs.length > 0 && (
        <div {...tabsWrapperProps}>
          {renderTabs({
            activeTabIndex: validActiveTabIndex,
            activeTabProps,
            hiddenTabProps,
            renderOnlyActiveTab,
            tabs,
          })}
        </div>
      )}
    </div>
  );
});

ReactSimplyTabs.propTypes = {
  activeControlProps: PropTypes.objectOf(PropTypes.any),
  activeTabIndex: PropTypes.number,
  activeTabProps: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  controls: PropTypes.arrayOf(PropTypes.node),
  controlsWrapperProps: PropTypes.objectOf(PropTypes.any),
  hiddenTabProps: PropTypes.objectOf(PropTypes.any),
  onRequestChange: PropTypes.func.isRequired,
  renderOnlyActiveTab: PropTypes.bool,
  tabsWrapperProps: PropTypes.objectOf(PropTypes.any),
  wrapperProps: PropTypes.objectOf(PropTypes.any),
};

ReactSimplyTabs.defaultProps = {
  activeControlProps: {},
  activeTabIndex: 0,
  activeTabProps: {},
  children: null,
  controls: [],
  controlsWrapperProps: {},
  hiddenTabProps: {
    style: {
      display: 'none',
    },
  },
  renderOnlyActiveTab: false,
  tabsWrapperProps: {},
  wrapperProps: {},
};

export default ReactSimplyTabs;
