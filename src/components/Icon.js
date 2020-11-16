import styled from 'styled-components';
import style from 'styled-theming';

const getColor = style.variants('mode', 'variant', {
    normal: {
        light: '#111',
        dark: '#EEE'
    },
    primary: {
        light: 'papayawhip',
        dark: 'pink'
    }
});

const Icon = styled.a`
    color: ${getColor}
`;

export default Icon;