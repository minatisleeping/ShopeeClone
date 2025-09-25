import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { offset, shift } from '@floating-ui/dom';
import { FloatingPortal, arrow } from '@floating-ui/react';
import { useFloating } from '@floating-ui/react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useId, useRef, useState } from 'react';
function Popover({ children, renderPopover, className, as: Element = 'div', initialOpen, placement = 'bottom-end' }) {
    var _a, _b, _c;
    const [isOpen, setOpen] = useState(initialOpen || false);
    const arrowRef = useRef(null);
    const { refs, middlewareData, x, y, strategy } = useFloating({
        middleware: [offset(6), shift(), arrow({ element: arrowRef })],
        placement: placement
    });
    const id = useId();
    const showPopover = () => setOpen(true);
    const hidePopover = () => setOpen(false);
    return (_jsxs(Element, { className: className, ref: refs.setReference, onMouseEnter: showPopover, onMouseLeave: hidePopover, children: [children, _jsx(FloatingPortal, { id: id, children: _jsx(AnimatePresence, { children: isOpen && (_jsxs(motion.div, { ref: refs.setFloating, style: {
                            position: strategy,
                            top: y !== null && y !== void 0 ? y : 0,
                            left: x !== null && x !== void 0 ? x : 0,
                            width: 'max-content',
                            transformOrigin: `${(_a = middlewareData === null || middlewareData === void 0 ? void 0 : middlewareData.arrow) === null || _a === void 0 ? void 0 : _a.x}px top`
                        }, initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0 }, transition: { duration: 0.2 }, children: [_jsx("span", { ref: arrowRef, className: 'border-x-transparent border-t-transparent border-b-white border-[11px] absolute translate-y-[-95%]', style: {
                                    left: (_b = middlewareData === null || middlewareData === void 0 ? void 0 : middlewareData.arrow) === null || _b === void 0 ? void 0 : _b.x,
                                    top: (_c = middlewareData === null || middlewareData === void 0 ? void 0 : middlewareData.arrow) === null || _c === void 0 ? void 0 : _c.y
                                } }), renderPopover] })) }) })] }));
}
export default Popover;
