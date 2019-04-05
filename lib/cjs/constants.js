'use strict';

exports.__esModule = true;
var constants = exports.constants = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwiYm9yZGVyUmFkaXVzIiwiYmFzZSIsImxhcmdlIiwic21hbGwiLCJuYXZCYXJIZWlnaHQiLCJmb250V2VpZ2h0IiwibGlnaHQiLCJub3JtYWwiLCJib2xkIiwiZm9udFNpemUiLCJoMSIsImgyIiwiaDMiLCJoNCIsIm1lZGl1bSIsImNsYXNzUHJlZml4Il0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxnQ0FBWTtBQUNyQjtBQUNBO0FBQ0FDLGtCQUFjO0FBQ1ZDLGNBQU0sQ0FESTtBQUVWQyxlQUFPLENBRkc7QUFHVkMsZUFBTztBQUhHLEtBSE87QUFRckJDLGtCQUFjLE1BUk87QUFTckJDLGdCQUFZO0FBQ1JDLGVBQU8sR0FEQztBQUVSQyxnQkFBUSxHQUZBO0FBR1JDLGNBQU07QUFIRSxLQVRTO0FBY3JCO0FBQ0E7QUFDQUMsY0FBVTtBQUNOQyxZQUFJLFFBREUsRUFDUTtBQUNkQyxZQUFJLE1BRkUsRUFFTTtBQUNaQyxZQUFJLFFBSEUsRUFHUTtBQUNkQyxZQUFJLFFBSkUsRUFJUTs7QUFFZFgsZUFBTyxRQU5EO0FBT05ZLGdCQUFRLFFBUEY7QUFRTlAsZ0JBQVEsUUFSRixFQVFZO0FBQ2xCSixlQUFPO0FBVEQsS0FoQlc7QUEyQnJCWSxpQkFBYTtBQTNCUSxDQUFsQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29uc3RhbnRzID0ge1xyXG4gICAgLy8gQ3VycmVudGx5IHdlIGRvIG5vdCB1c2Ugcm91bmRpbmdzLCBidXQgdGhlIHZhcmlhYmxlcyBoYXZlIGJlZW4gYWRkZWQgZm9yXHJcbiAgICAvLyBCb290c3RyYXAgY29tcGF0aWJpbGl0eVxyXG4gICAgYm9yZGVyUmFkaXVzOiB7XHJcbiAgICAgICAgYmFzZTogMCxcclxuICAgICAgICBsYXJnZTogMCxcclxuICAgICAgICBzbWFsbDogMCxcclxuICAgIH0sXHJcbiAgICBuYXZCYXJIZWlnaHQ6ICc0MHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IHtcclxuICAgICAgICBsaWdodDogMzAwLFxyXG4gICAgICAgIG5vcm1hbDogNDAwLFxyXG4gICAgICAgIGJvbGQ6IDcwMCxcclxuICAgIH0sXHJcbiAgICAvLyBCb290c3RyYXAgMyBzZXRzIGh0bWwgZm9udC1zaXplIHRvIDYyLjUlIGkuZS4gMTBweCB3aXRoIEJyb3dzZXIncyBkZWZhdWx0IHNpemUgYmVpbmcgMTZweC5cclxuICAgIC8vIEJvb3RzdHJhcCA0IHVzZXMgZGlmZmVyZW50IGJhc2UgZm9udC1zaXplIGFuZCBoZW5jZSB0aGVzZSB2YWx1ZXMgbmVlZCB0byBiZSBjaGFuZ2VkLlxyXG4gICAgZm9udFNpemU6IHtcclxuICAgICAgICBoMTogJzMuNnJlbScsIC8vIDM2cHhcclxuICAgICAgICBoMjogJzNyZW0nLCAvLyAzMHB4XHJcbiAgICAgICAgaDM6ICcyLjRyZW0nLCAvLyAyNHB4XHJcbiAgICAgICAgaDQ6ICcxLjhyZW0nLCAvLyAxOHB4XHJcblxyXG4gICAgICAgIGxhcmdlOiAnMS44cmVtJyxcclxuICAgICAgICBtZWRpdW06ICcxLjZyZW0nLFxyXG4gICAgICAgIG5vcm1hbDogJzEuNHJlbScsIC8vIGRlZmF1bHQgdGV4dFxyXG4gICAgICAgIHNtYWxsOiAnMS4ycmVtJyxcclxuICAgIH0sXHJcbiAgICBjbGFzc1ByZWZpeDogJ29jLWxheW91dCcsXHJcbn07XHJcbiJdfQ==