import TextField from './TextField';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchField() {
  return (
    <TextField
      placeholder="Search"
      endAdornment={<SearchIcon style={{ color: '#24558D' }} />}
    />
  );
}
