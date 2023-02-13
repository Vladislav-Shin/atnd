import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    navigation: {
        "&.ant-menu.ant-menu-dark": {
            background: "none",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 500,
      
            "& a": {
              color: "#fff",
            },
      
            "& .ant-menu-item": {
              height: "50px",
              margin: 0,
              padding: "0 !important",
      
              "&:hover": {
                background: "rgba(0, 0, 0, 0.1)",
              },
      
              "&-selected": {
                background: "#1F2552",
              },
            },
          },
    },
    menuItemIcon: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "50px",
    },

})