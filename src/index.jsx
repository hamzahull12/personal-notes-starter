import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteMain from './components/NoteMain';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NoteMain/>);