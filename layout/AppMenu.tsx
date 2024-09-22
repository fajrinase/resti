/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: 'Transaksi',
            items: [
                { label: 'Register Pengajuan Klaim', icon: 'pi pi-fw pi-id-card', to: '/pages/transaksi/registerpengajuanklaim' },
                { label: 'Data Pengajuan Klaim', icon: 'pi pi-fw pi-id-card', to: '/pages/transaksi/analisapengajuanklaim' },
                
            ]
        },
        {
            label: 'Laporan',
            items: [
                {
                    label: 'Laporan Internal',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Laporan 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                        },
                        {
                            label: 'Laporan 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                        }
                    ]
                },
                {
                    label: 'Laporan Eksternal',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Laporan 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                        },
                        {
                            label: 'Laporan 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                        }
                    ]
                },
            ]
        },
        {
            label: 'Master Data',
            icon: 'pi pi-fw pi-id-card',
            to: '/pages/master',
            items: [
                {
                    label: 'Penjaminan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/penjaminan'
                },
                {
                    label: 'Penerima Jaminan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/penerimajaminan'
                },
                {
                    label: 'Produk Penjaminan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/produkpenjaminan'
                },
                {
                    label: 'Dokumen Klaim',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/dokumenpengajuanklaim'
                },
                {
                    label: 'PKS Penjaminan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/pkspenjaminan'
                },
                {
                    label: 'Persyaratan Klaim',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/persyaratanpengajuanklaim'
                },
                {
                    label: 'Penyebab Klaim',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/penyebabklaim'
                },
                {
                    label: 'Pengikatan Agunan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/pengikatanagunanpenjaminan'
                },
                {
                    label: 'Terjamin Penjaminan',
                    icon: 'pi pi-fw pi-id-card',
                    to: '/pages/master/terjaminpenjaminan'
                }
            ]
        },
        {
            label: 'Pengaturan',
            items: [
                {
                    label: 'Submenu 1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        {
                            label: 'Submenu 2.1',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [
                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            icon: 'pi pi-fw pi-bookmark',
                            items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Bantuan',
            items: [
                {
                    label: 'Dokumentasi',
                    icon: 'pi pi-fw pi-question',
                    to: '/documentation'
                }
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
