import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  children,
  title,
  to,
  onClick,
  $variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit')
    return (
      <S.ButtonContainer
        disabled={disabled}
        $variant={$variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )

  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}
export default Button
