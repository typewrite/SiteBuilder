export interface BaseProps {
    [key: string]: any;
}

export interface WebComponent<S extends BaseProps> {
    (props: S): HTMLElement;
}

export interface ImageComponetProps extends BaseProps {
    src: string;
    alt: string;
}

export interface ImageComponent extends WebComponent<ImageComponetProps> {}

export interface Logo extends BaseProps {
    text: string;
    src?: string;
}

export interface MenuItem extends BaseProps {
    text: string;
    href?: string;
    subMenu?: MenuItem[];
}

export interface MenuProps extends BaseProps {
    menuItems: MenuItem[];
}

export interface HeaderProps extends MenuProps {
    logo: Logo;
}

export interface MenuComponent extends WebComponent<MenuProps> {}
