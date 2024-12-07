import {TextInput} from '@mantine/core'

export const Input = ({
  placeholder='',
  label='',
  description='',
  name='',
  
  error,
  register,
  required=true,
  
  rightSection,
  radius=8,
  labelSize,
  descSize,
  icon,
  
  disabled,
  type
}) => {
  
  return (
    <TextInput
    styles={()=>({
      root:{
        maxWidth: '500px',
        margin: '1rem 0',
      },
      error: {
      fontSize:'var(--para-text)'
      },
      rightSection:{
        right: '-1%'
      },
      label:{
        fontSize: labelSize ? labelSize:'var(--title-text)',
        color: 'var(--dark-text)'
      },
      description:{
        fontSize: descSize ? descSize:'var(--para-text)',
        color: 'var(--lighter-text)',
        fontWeight:'var(--medium)',
      },
      input: {
        padding: '18px 10px',
        '&:focus': {
        border: '1.5px solid rgba(91,174,204,1)',
        boxShadow: 'rgba(91,174,204,.3) 0 0 0 2.5px',
        },
        '&:placeholder':{
          fontSize: 'var(--caption-text)'
        }
      }
  
    })}
    placeholder={placeholder}
    label={label}
    radius={radius}
    description={description}
    name={name}
    {...register(name,{
      required: {
      value: required,
      message:`You forgot to mention the ${label}.`}})
    }
    icon={icon}
    type={type}
    disabled={disabled}
    error={error}
    rightSection = {rightSection}
    />
    )
}