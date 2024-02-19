import Form from 'react-bootstrap/Form';

export default function SearchForm() {
    return (
        <div className='main-form'>
            <div className='main-form-container'>
                <div className='form-container'>
                    <div className='form-header'>
                        <Form.Select className='form-select-buy' aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select className='form-select-residential' aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control
                            className='form-control-suburb'
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </div>
                    <div className='form-footer'>
                        <Form.Control
                            className='form-control-number'
                            placeholder="#Web Ref. Number Search "
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <div className='form-footer-more'>
                            <p className='form-paragraph'>124 Properties</p>
                            <Form.Select className='form-select-more' aria-label="Default select example">
                                <option>More Search Options</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <button className='form-button'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
// import Stack from '@mui/material/Stack';

// export default function SearchForm() {
//     const [buy, setBuy] = React.useState('');
//     const [res, setRes] = React.useState('');
//     const [more, setMore] = React.useState('');

//     const handleChangeBuy = (event) => {
//         setBuy(event.target.value);
//     };

//     const handleChangeRes = (event) => {
//         setRes(event.target.value);
//     };

//     const handleChangeMore = (event) => {
//         setMore(event.target.value);
//     };

//     return (
//         <div className='form_align'>
//             <div className='form__wrapper'>
//                 <div className='tran__box'>
//                     <div className='form__container_1'>
//                         <FormControl className='form__buy' sx={{ width: 90, m: 1 }} >
//                             <InputLabel sx={{ color: '#828282' }} id="formBuy">Buy</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-helper-label"
//                                 id="demo-simple-select-helper"
//                                 value={buy}
//                                 label="Age"
//                                 onChange={handleChangeBuy}
//                             >

//                                 <MenuItem value={10}>Test 1</MenuItem>
//                                 <MenuItem value={20}>Test 2</MenuItem>
//                                 <MenuItem value={30}>Test 3</MenuItem>
//                             </Select>
//                         </FormControl>
//                         <FormControl sx={{ width: 330, m: 1 }} className='form__res'>
//                             <InputLabel sx={{ color: '#828282' }} id="formResidential">Residential</InputLabel>
//                             <Select
//                                 labelId="formResidential"
//                                 id="demo-simple-select-helper"
//                                 value={res}
//                                 label="Residential"
//                                 onChange={handleChangeRes}
//                             >

//                                 <MenuItem value={10}>Test 1</MenuItem>
//                                 <MenuItem value={20}>Test 2</MenuItem>
//                                 <MenuItem value={30}>Test 3</MenuItem>
//                             </Select>
//                         </FormControl>


//                         <Box
//                             component="form"
//                             noValidate
//                             autoComplete="off"
//                             className='form__suburb'

//                         >
//                             <TextField sx={{ width: 550, m: 1 }} id="formSuburb" label="Type Area or Suburb Name" variant="outlined" type='text' />
//                         </Box>
//                     </div>
//                     <div className='form__container_2'>
//                         <Box
//                             component="form"
//                             noValidate
//                             autoComplete="off"
//                             className='form__number'

//                         >
//                             <TextField className='form_num_text' sx={{ width: 235, m: 1 }} id="formNumber" label="# Web Ref. Number Search" variant="outlined" type='number' />
//                         </Box>
//                         <div className='form__prop'>124 Properties</div>
//                         <FormControl sx={{ width: 209, m: 1 }} className='form__search_options'>
//                             <InputLabel id="formOptions">More Search Options</InputLabel>
//                             <Select
//                                 labelId="formOptions"
//                                 id="demo-simple-select-helper"
//                                 value={more}
//                                 label="More"
//                                 onChange={handleChangeMore}
//                                 sx={{ color: 'white' }}
//                             >

//                                 <MenuItem value={10}>Test 1</MenuItem>
//                                 <MenuItem value={20}>Test 2</MenuItem>
//                                 <MenuItem value={30}>Test 3</MenuItem>
//                             </Select>
//                         </FormControl>
//                         <Stack direction="row" spacing={2}>
//                             <Button className='form__button' sx={{ bgcolor: '#FC495D', width: 113, m: 1, height: 50 }} variant="contained" startIcon={<SearchIcon />}>
//                                 Search
//                             </Button>
//                         </Stack>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }