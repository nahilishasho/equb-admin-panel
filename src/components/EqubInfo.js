import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import cboLogo from '../assets/img/cboLogo.png';
export default function EqubInfo() {
    return(
        <div>
            <NavbarInput placeholder="Search" />
            <h1>Hello how are you</h1>
        </div>
    );
}