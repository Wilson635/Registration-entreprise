/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </React.Fragment>
            )}
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' },
    { title: 'The Godfather: Part II' },
    { title: 'The Dark Knight' },
    { title: '12 Angry Men' },
    { title: "Schindler's List" },
    { title: 'Pulp Fiction' },
    { title: 'The Lord of the Rings: The Return of the King' },
    { title: 'The Good, the Bad and the Ugly' },
    { title: 'Fight Club' },
    { title: 'The Lord of the Rings: The Fellowship of the Ring' },
    { title: 'Star Wars: Episode V - The Empire Strikes Back' },
    { title: 'Forrest Gump' },
    { title: 'Inception' },
    { title: 'The Lord of the Rings: The Two Towers' },
    { title: "One Flew Over the Cuckoo's Nest" },
    { title: 'Goodfellas' },
    { title: 'The Matrix' },
    { title: 'Seven Samurai' },
    { title: 'Star Wars: Episode IV - A New Hope' },
    { title: 'City of God' },
    { title: 'Se7en' },
    { title: 'The Silence of the Lambs' },
    { title: "It's a Wonderful Life" },
    { title: 'Life Is Beautiful' },
    { title: 'The Usual Suspects' },
    { title: 'Léon: The Professional' },
    { title: 'Spirited Away' },
    { title: 'Saving Private Ryan' },
    { title: 'Once Upon a Time in the West' },
    { title: 'American History X' },
    { title: 'Interstellar' },
];
