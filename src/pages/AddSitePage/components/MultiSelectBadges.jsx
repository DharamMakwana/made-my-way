import {MultiSelect,Button} from '@mantine/core'
import {Badges} from '../../../data/constant'

export const MultiSelectBadges = ({register,setValue}) => {
  return (
      <MultiSelect
      data={Badges}
      radius={8}
      style={{margin:'0 auto'}}
      styles={()=>({
      root:{
    		maxWidth: '500px',
        margin: '.5rem 0',
      },
      label:{
        fontSize: 'var(--title-text)',
        color: 'var(--dark-text)'
      },
      description:{
        fontSize: 'var(--para-text)',
        color: 'var(--lighter-text)',
        fontWeight:'var(--medium)',
      },
    })}
      label="Perfect for you, if you enjoy"
      description="Pick all that you like"
      name="labels"
      {...register("labels")}
      onChange = {e => {
        setValue('labels',e)
      }}
    />
    )
}