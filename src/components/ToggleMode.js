import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Icon from './Icon';
import { HiSun, HiMoon} from 'react-icons/hi';

export default function ToggleMode() {

    return (
        <ThemeConsumer>{theme => (<Icon 
            variant="normal"
            onClick={e => {
                e.preventDefault();
                theme.setTheme(
                    theme.mode === 'dark' 
                    ? {...theme, mode: 'light'} 
                    : {...theme, mode: 'dark'}
                );
            }}
        >
            {theme.mode === 'dark' ? <HiSun size={25}/> : <HiMoon size={25}/>}</Icon>)}
        </ThemeConsumer>
    );
}