import { offset, shift } from '@floating-ui/dom'
import { FloatingPortal, arrow } from '@floating-ui/react'
import { useFloating } from '@floating-ui/react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { type ElementType, useId, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
}

function Popover({ children, renderPopover, className, as: Element = 'div', initialOpen }: Props) {
  const [isOpen, setOpen] = useState(initialOpen || false)
  const arrowRef = useRef<HTMLElement>(null)
  const { refs, middlewareData, x, y, strategy } = useFloating({
    middleware: [offset(6), shift(), arrow({ element: arrowRef })]
  })

  const id = useId()
  const showPopover = () => setOpen(true)
  const hidePopover = () => setOpen(false)

  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData?.arrow?.x}px top`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='border-x-transparent border-t-transparent border-b-white border-[11px] absolute translate-y-[-95%]'
                style={{
                  left: middlewareData?.arrow?.x,
                  top: middlewareData?.arrow?.y
                }}
              ></span>
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}

export default Popover
