responsive 공부
=====


# Styled Component
```
    @media only screen and (min-width : 768px) { 
        /* 스크린폭이 props보다 클 때 */
        float : left;
        width : ${(props) => (props.span ? (props.span / 12) * 100 : "8.33")}%;
    }

   @media ${(props) => props.theme.tablet} {
        width : 50%,
        margin : 0 auto,
    }
    }
    @media ${(props) => props.theme.laptop} {
        width : 100%,
        margin : 0 auto,
    }
    @media ${(props) => props.theme.desktop} {
        width : 100%,
        margin : 0 auto,
    } 

```