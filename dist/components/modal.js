"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./Css/modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * The modal is rendered if the showModal state is true and the show prop is true.
 * @returns A modal component that is rendered when the show prop is true.
 */
const Modal = _ref => {
  let {
    show,
    title,
    titleButton,
    noCloseButton,
    noButton
  } = _ref;
  const [showModal, setShowModal] = (0, _react.useState)(true);
  const modalClose = () => {
    setShowModal(false);
  };
  return showModal && show && /*#__PURE__*/_react.default.createElement("div", {
    id: "modalContainer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("span", null, title ? title : "Employee Created!"), !noCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "modalClose",
    title: "Hide Modal",
    onClick: modalClose
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContent"
  }, !noButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "modalCloseEnd",
    title: "close",
    onClick: modalClose
  }, titleButton ? titleButton : "Close"))));
};
var _default = Modal;
exports.default = _default;
Modal.propTypes = {
  show: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string,
  titleButton: _propTypes.default.string,
  noCloseButton: _propTypes.default.bool
};