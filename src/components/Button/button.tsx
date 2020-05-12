import './button.less'
import React,{
    FC,
    AnchorHTMLAttributes,
    ReactNode,
} from 'react'
import classNames from 'classnames'

type ButtonType = 'primary' | 'warning' | 'disabled' | 'normal'
type ButtonSize = 'large' | 'small' | 'normal'

interface BaseButtonProps {
    className?: string
    /**设置 Button 的尺寸 */
    size?: ButtonSize
    /**设置 Button 的类型 */
    btnType?: ButtonType
    children?: ReactNode
}

type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

const Button: FC<AnchorButtonProps> = props => {
    const {
        btnType = 'normal',
        size = 'normal',
        children,
        className,
        ...restProps
    } = props

    const btnCls = classNames('tt-btn', className, {
        'tt-btn-primary': btnType === 'primary',
        'tt-btn-warning': btnType === 'warning',
        'tt-btn-disabled': btnType === 'disabled',
        'tt-btn-large': size === 'large',
        'tt-btn-small': size === 'small',
    })
    return (
        // eslint-disable-next-line
        <a className={btnCls} {...restProps}>
            {children}
        </a>
    )
}

export default Button