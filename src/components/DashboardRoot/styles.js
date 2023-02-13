import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    btn: {
        display: "inline-block",
        boxShadow: "none",
        height: "auto"
        // minWidth: (data:) => (data.minW ? (data.minW && Number.isInteger(data.minW) ? data.minW : 200) : 0),
    },
    leftMenu: {
        backgroundColor: "#3C4168",
        zIndex: 10,

        "&.ant-layout-sider-collapsed": {
            "& $poweredBy": {
                display: "none",
            },
        },

        "& .ant-layout-sider-children": {
            display: "flex",
            flexDirection: "column",
        },
    },
    leftMenuMask: {
        display: "flex",
        alignItems: "center",

        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "60px",
        background: "#353A63",
        // @ts-ignore
    },
    leftMenuBurger: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        border: "none",
        height: "60px",
        padding: 0,
        background: "#1F2552",
        flexShrink: 0,
        borderRadius: 0,
    },
})