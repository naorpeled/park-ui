import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
  type RadioGroupProps,
} from '~/components/ui/radio-button-group'

export const RadioButtonGroupDemo = (props: RadioGroupProps) => {
  const options = [{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }]
  return (
    <RadioButtonGroup defaultValue="react" orientation="vertical" {...props}>
      {options.map((option, id) => (
        <Radio key={id} value={option.value} disabled={option.disabled}>
          <RadioControl />
          <RadioLabel>{option.value}</RadioLabel>
        </Radio>
      ))}
    </RadioButtonGroup>
  )
}
