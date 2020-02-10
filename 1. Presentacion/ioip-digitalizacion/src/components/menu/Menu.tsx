import React, { Component } from 'react';

import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { loadTheme } from 'office-ui-fabric-react';

import logo from '../../logo.svg';

import './Menu.css';
import { Barcode } from '../../model/Barcode';
import { Sheet } from '../../model/Sheet';

initializeIcons();
const overflowButtonProps: IButtonProps = { ariaLabel: 'Más opciones' };

export class Menu extends Component<any, any> {
    constructor(props: any) {
        super(props);

        let currentTheme = this.props.theme;
        loadTheme(currentTheme);

        this.state = {
            appName: '',
            sheets: undefined
        }

        this.setState({
            appName: this.props.tittle, 
        }
        );
    }

    getSheets() : Sheet[]{
        return (this.state?.sheets as Sheet[]);
    }
    
    getBarcodesLengt() : number {
        const barcodesLenght = this.getSheets()?.filter(sheet=> sheet.barcodes);
        return (barcodesLenght) ? barcodesLenght.length : 0;
    }

    getOcrRecognizedLength() : number {
        const ocrLenght = this.getSheets()?.filter(sheet=> sheet.paragraphFromOcr);
        return (ocrLenght) ? ocrLenght.length : 0;
    }

    render() {
        
        return (<>
            <header className="App-header">
                <div className="Complete-Logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>{this.props.tittle}</h3>
                </div>
                <div className="Menubar">
                    <CommandBar
                        items={
                            [
                                {
                                    key: 'add',
                                    text: 'Agregar',
                                    iconProps: { iconName: 'Add' },
                                    split: true,
                                    ariaLabel: 'Agregar',
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'scanFile',
                                                text: 'Desde escaner',
                                                iconProps: { iconName: 'ImagePixel' },
                                                split: true,
                                                ariaLabel: 'Desde escaner',
                                            },
                                            {
                                                key: 'addFileFromDisk',
                                                text: 'Desde archivo',
                                                iconProps: { iconName: 'OpenFile' },
                                                split: true,
                                                ariaLabel: 'Desde archivo en el disco',
                                            },
                                            {
                                                key: 'takePicture',
                                                text: 'Desde cámara',
                                                iconProps: { iconName: 'Camera' },
                                                split: true,
                                                ariaLabel: 'Desde camara',
                                            }
                                        ]
                                    }
                                },
                                {
                                    key: 'editItem',
                                    text: 'Editar',
                                    iconProps: { iconName: 'EditPhoto' },
                                    split: true,
                                    ariaLabel: 'Editar',
                                },
                                {
                                    key: 'rotate',
                                    text: 'Rotar',
                                    iconProps: { iconName: 'Rotate' },
                                    split: true,
                                    ariaLabel: 'Rotar',
                                    subMenuProps: {
                                        items: [{
                                                key: 'rotateLeftItem',
                                                text: 'Rotar a la izquierda',
                                                iconProps: { iconName: 'Rotate90CounterClockwise' },
                                                split: true,
                                                ariaLabel: '',
                                            },
                                            {
                                                key: 'rotateRightItem',
                                                text: 'Rotar a la derecha',
                                                iconProps: { iconName: 'Rotate90Clockwise' },
                                                split: true,
                                                ariaLabel: '',
                                            },
                                            {
                                                key: 'rotateItem',
                                                text: 'Rotar 180°',
                                                iconProps: { iconName: 'Rotate' },
                                                split: true,
                                                ariaLabel: '',
                                            }]
                                    }
                                },
                                {
                                    key: 'mirror',
                                    text: 'Espejo.',
                                    iconProps: { iconName: 'AlignHorizontalCenter' },
                                    split: true,
                                    ariaLabel: 'Espejo',
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'horizontalMirrorItem',
                                                text: 'Espejo horizontal',
                                                iconProps: { iconName: 'AlignHorizontalCenter' },
                                                split: true,
                                                ariaLabel: '',
                                            },
                                            {
                                                key: 'verticalMirrorItem',
                                                text: 'Espejo vertical',
                                                iconProps: { iconName: 'AlignVerticalCenter' },
                                                split: true,
                                                ariaLabel: '',
                                            }
                                        ]
                                    }
                                },
                                {
                                    key: 'delete',
                                    text: 'Borrar página',
                                    iconProps: { iconName: 'Delete' },
                                    split: true,
                                    ariaLabel: 'Borrar',
                                    subMenuProps:{
                                        items: [
                                            {
                                                key: 'deleteOneItem',
                                                text: 'Borrar página',
                                                iconProps: { iconName: 'Delete' },
                                                split: true,
                                                ariaLabel: '',
                                            },
                                            {
                                                key: 'deleteAllItem',
                                                text: 'Borrar todas las páginas',
                                                iconProps: { iconName: 'DeleteTable' },
                                                split: true,
                                                ariaLabel: '',
                                            }
                                        ]
                                    }
                                },
                                {
                                    key: 'resize',
                                    text: 'Cambiar tamaño',
                                    iconProps: { iconName: 'SizeLegacy' },
                                    split: true,
                                    ariaLabel: '',
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'resizeItem',
                                                text: 'Redimensionar',
                                                iconProps: { iconName: 'SizeLegacy' },
                                                split: true,
                                                ariaLabel: '',
                                            },
                                            {
                                                key: 'trimItem',
                                                text: 'Recortar',
                                                iconProps: { iconName: 'Trim' },
                                                split: true,
                                                ariaLabel: '',
                                            }, 
                                        ]
                                    }
                                },  
                                {
                                    key: 'decodeBarcodeItem',
                                    text: 'Cod. barras (' + this.getBarcodesLengt()  + ')',
                                    iconProps: { 
                                        //iconName: 'GenericScanFilled'
                                        iconName: 'QRCode'
                                    },
                                    split: true,
                                    disabled: this.getBarcodesLengt() < 1,
                                    href: 'https://dev.office.com/fabric',
                                    subMenuProps: {
                                        items: [
                                            { key: 'item1', text: 'Item One' },
                                            { key: 'item2', text: 'Item Two' }
                                        ]
                                    }
                                },
                                {
                                    key: 'decodeOcrItem',
                                    text: 'Ocr (' + this.getOcrRecognizedLength()  + ')',
                                    iconProps: { 
                                        iconName: 'TextOverflow'
                                    },
                                    split: true,
                                    disabled: this.getBarcodesLengt() < 1,
                                    href: 'https://dev.office.com/fabric',
                                    subMenuProps: {
                                        items: [
                                            { key: 'item1', text: 'Item One' },
                                            { key: 'item2', text: 'Item Two' }
                                        ]
                                    }
                                },
                                {
                                    key: 'downloadFile',
                                    text: 'Descargar',
                                    ariaLabel: 'Descargar',
                                    iconProps: { iconName: 'Download' },
                                    iconOnly: true,
                                    disabled: false,
                                    subMenuProps: {
                                        items: [
                                            { key: 'downloadBmp', iconProps: { iconName: 'FileImage' }, text: 'BMP' },
                                            { key: 'downloadJpeg', iconProps: { iconName: 'FileImage' }, text: 'JPEG' },
                                            { key: 'downloadPng', iconProps: { iconName: 'FileImage' }, text: 'PNG' },
                                            { key: 'downloadTiffCurrent', iconProps: { iconName: 'FileTemplate' }, text: 'TIFF, Página' },
                                            { key: 'downloadTiffAll',  iconProps: { iconName: 'FileTemplate' }, text: 'TIFF, Todo' },
                                            { key: 'downloadPdfCurrent',  iconProps: { iconName: 'PDF' }, text: 'PDF, Página' },
                                            { key: 'downloadPdfAll',  iconProps: { iconName: 'PDF' }, text: 'PDF, Todo' },
                                        ]
                                    }
                                },
                                {
                                    key: 'uploadFile',
                                    text: 'Cargar',
                                    ariaLabel: 'Cargar',
                                    iconProps: { iconName: 'Upload' },
                                    iconOnly: true,
                                    disabled: false,
                                    subMenuProps: {
                                        items: [
                                            { key: 'uploadBmp', iconProps: { iconName: 'FileImage' }, text: 'BMP' },
                                            { key: 'uploadJpeg', iconProps: { iconName: 'FileImage' }, text: 'JPEG' },
                                            { key: 'uploadPng', iconProps: { iconName: 'FileImage' }, text: 'PNG' },
                                            { key: 'uploadTiffCurrent', iconProps: { iconName: 'FileTemplate' }, text: 'TIFF, Página' },
                                            { key: 'uploadTiffAll',  iconProps: { iconName: 'FileTemplate' }, text: 'TIFF, Todo' },
                                            { key: 'uploadPdfCurrent',  iconProps: { iconName: 'PDF' }, text: 'PDF, Página' },
                                            { key: 'uploadPdfAll',  iconProps: { iconName: 'PDF' }, text: 'PDF, Todo' },
                                        ]
                                    }
                                }
                            ]
                        }
                        overflowButtonProps={overflowButtonProps}
                        ariaLabel="Use las felchas izquierda y derecha para navegar po rl menu"
                    />
                </div>

            </header>
        </>)
    }
}


export default Menu;