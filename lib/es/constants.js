export var constants = {
    // Currently we do not use roundings, but the variables have been added for
    // Bootstrap compatibility
    borderRadius: {
        base: 0,
        large: 0,
        small: 0
    },
    navBarHeight: '40px',
    fontWeight: {
        light: 300,
        normal: 400,
        bold: 700
    },
    // Bootstrap 3 sets html font-size to 62.5% i.e. 10px with Browser's default size being 16px.
    // Bootstrap 4 uses different base font-size and hence these values need to be changed.
    fontSize: {
        h1: '3.6rem', // 36px
        h2: '3rem', // 30px
        h3: '2.4rem', // 24px
        h4: '1.8rem', // 18px

        large: '1.8rem',
        medium: '1.6rem',
        normal: '1.4rem', // default text
        small: '1.2rem'
    },
    classPrefix: 'oc-layout'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwiYm9yZGVyUmFkaXVzIiwiYmFzZSIsImxhcmdlIiwic21hbGwiLCJuYXZCYXJIZWlnaHQiLCJmb250V2VpZ2h0IiwibGlnaHQiLCJub3JtYWwiLCJib2xkIiwiZm9udFNpemUiLCJoMSIsImgyIiwiaDMiLCJoNCIsIm1lZGl1bSIsImNsYXNzUHJlZml4Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQU1BLFlBQVk7QUFDckI7QUFDQTtBQUNBQyxrQkFBYztBQUNWQyxjQUFNLENBREk7QUFFVkMsZUFBTyxDQUZHO0FBR1ZDLGVBQU87QUFIRyxLQUhPO0FBUXJCQyxrQkFBYyxNQVJPO0FBU3JCQyxnQkFBWTtBQUNSQyxlQUFPLEdBREM7QUFFUkMsZ0JBQVEsR0FGQTtBQUdSQyxjQUFNO0FBSEUsS0FUUztBQWNyQjtBQUNBO0FBQ0FDLGNBQVU7QUFDTkMsWUFBSSxRQURFLEVBQ1E7QUFDZEMsWUFBSSxNQUZFLEVBRU07QUFDWkMsWUFBSSxRQUhFLEVBR1E7QUFDZEMsWUFBSSxRQUpFLEVBSVE7O0FBRWRYLGVBQU8sUUFORDtBQU9OWSxnQkFBUSxRQVBGO0FBUU5QLGdCQUFRLFFBUkYsRUFRWTtBQUNsQkosZUFBTztBQVRELEtBaEJXO0FBMkJyQlksaUJBQWE7QUEzQlEsQ0FBbEIiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbnN0YW50cyA9IHtcclxuICAgIC8vIEN1cnJlbnRseSB3ZSBkbyBub3QgdXNlIHJvdW5kaW5ncywgYnV0IHRoZSB2YXJpYWJsZXMgaGF2ZSBiZWVuIGFkZGVkIGZvclxyXG4gICAgLy8gQm9vdHN0cmFwIGNvbXBhdGliaWxpdHlcclxuICAgIGJvcmRlclJhZGl1czoge1xyXG4gICAgICAgIGJhc2U6IDAsXHJcbiAgICAgICAgbGFyZ2U6IDAsXHJcbiAgICAgICAgc21hbGw6IDAsXHJcbiAgICB9LFxyXG4gICAgbmF2QmFySGVpZ2h0OiAnNDBweCcsXHJcbiAgICBmb250V2VpZ2h0OiB7XHJcbiAgICAgICAgbGlnaHQ6IDMwMCxcclxuICAgICAgICBub3JtYWw6IDQwMCxcclxuICAgICAgICBib2xkOiA3MDAsXHJcbiAgICB9LFxyXG4gICAgLy8gQm9vdHN0cmFwIDMgc2V0cyBodG1sIGZvbnQtc2l6ZSB0byA2Mi41JSBpLmUuIDEwcHggd2l0aCBCcm93c2VyJ3MgZGVmYXVsdCBzaXplIGJlaW5nIDE2cHguXHJcbiAgICAvLyBCb290c3RyYXAgNCB1c2VzIGRpZmZlcmVudCBiYXNlIGZvbnQtc2l6ZSBhbmQgaGVuY2UgdGhlc2UgdmFsdWVzIG5lZWQgdG8gYmUgY2hhbmdlZC5cclxuICAgIGZvbnRTaXplOiB7XHJcbiAgICAgICAgaDE6ICczLjZyZW0nLCAvLyAzNnB4XHJcbiAgICAgICAgaDI6ICczcmVtJywgLy8gMzBweFxyXG4gICAgICAgIGgzOiAnMi40cmVtJywgLy8gMjRweFxyXG4gICAgICAgIGg0OiAnMS44cmVtJywgLy8gMThweFxyXG5cclxuICAgICAgICBsYXJnZTogJzEuOHJlbScsXHJcbiAgICAgICAgbWVkaXVtOiAnMS42cmVtJyxcclxuICAgICAgICBub3JtYWw6ICcxLjRyZW0nLCAvLyBkZWZhdWx0IHRleHRcclxuICAgICAgICBzbWFsbDogJzEuMnJlbScsXHJcbiAgICB9LFxyXG4gICAgY2xhc3NQcmVmaXg6ICdvYy1sYXlvdXQnLFxyXG59O1xyXG4iXX0=