import * as React from 'react';
import { Input as BaseInput, InputProps } from '@mui/base/Input';

const InputWithRef = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput {...props} ref={ref} />;
});

export default function Input(props) {
  return <InputWithRef aria-label="Demo input" placeholder="Type something…" props={props} />;
}
