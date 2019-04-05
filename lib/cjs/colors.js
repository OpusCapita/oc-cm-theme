'use strict';

exports.__esModule = true;
var descriptions = {
    grey1: ['Button (disabled)'],
    grey2: ['Alert notification background'],
    grey3: ['Edited grid row', 'Disabled grid text', 'Input border'],
    grey4: ['Select hover background', 'Grid highlighted row background', 'Grid header background'],
    grey5: ['Selected grid row background', 'Selected select item background'],
    grey6: ['App background', 'Grid row border'],
    grey7: ['Grid outer border'],
    grey8: ['Button (hover)'],
    grey9: ['Grid text', 'Button background', 'Checkbox border'],
    grey10: ['Button (pressed)'],

    // Oranges
    orange1: ['Priority button (hover)'],
    orange2: ['Priority button background'],
    orange3: ['Priority button (pressed)'],

    // Other colors e.g. graphs
    yellow: ['Warning color'],
    white: ['Content background color'],
    green: ['Success color'],
    black: [],
    petrol: ['Tooltip background color'],
    red: ['Error color'],
    blue: [],
    violet: []
};

var colors = exports.colors = {
    // Greys
    grey1: '#F0F0F0',
    grey2: '#EAEAEA',
    grey3: '#CCCCCC',

    // Bluish greys
    grey4: '#EFF2F4',
    grey5: '#E6E9EB',
    grey6: '#D3DADE',
    grey7: '#A4AFB6',
    grey8: '#77818c',
    grey9: '#67707C',
    grey10: '#585F68',

    // Oranges
    orange1: '#FF7517',
    orange2: '#EC6608',
    orange3: '#d35c0b',

    // Other colors e.g. graphs
    yellow: '#FECA1D',
    white: '#FFFFFF',
    green: '#3AA57B',
    black: '#000000',
    petrol: '#006070',
    red: '#D82515',
    blue: '#16AED6',
    violet: '#943BA3',
    descriptions: descriptions
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xvcnMuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb25zIiwiZ3JleTEiLCJncmV5MiIsImdyZXkzIiwiZ3JleTQiLCJncmV5NSIsImdyZXk2IiwiZ3JleTciLCJncmV5OCIsImdyZXk5IiwiZ3JleTEwIiwib3JhbmdlMSIsIm9yYW5nZTIiLCJvcmFuZ2UzIiwieWVsbG93Iiwid2hpdGUiLCJncmVlbiIsImJsYWNrIiwicGV0cm9sIiwicmVkIiwiYmx1ZSIsInZpb2xldCIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTUEsZUFBZTtBQUNqQkMsV0FBTyxDQUFDLG1CQUFELENBRFU7QUFFakJDLFdBQU8sQ0FBQywrQkFBRCxDQUZVO0FBR2pCQyxXQUFPLENBQ0gsaUJBREcsRUFFSCxvQkFGRyxFQUdILGNBSEcsQ0FIVTtBQVFqQkMsV0FBTyxDQUNILHlCQURHLEVBRUgsaUNBRkcsRUFHSCx3QkFIRyxDQVJVO0FBYWpCQyxXQUFPLENBQ0gsOEJBREcsRUFFSCxpQ0FGRyxDQWJVO0FBaUJqQkMsV0FBTyxDQUFDLGdCQUFELEVBQW1CLGlCQUFuQixDQWpCVTtBQWtCakJDLFdBQU8sQ0FBQyxtQkFBRCxDQWxCVTtBQW1CakJDLFdBQU8sQ0FBQyxnQkFBRCxDQW5CVTtBQW9CakJDLFdBQU8sQ0FDSCxXQURHLEVBRUgsbUJBRkcsRUFHSCxpQkFIRyxDQXBCVTtBQXlCakJDLFlBQVEsQ0FBQyxrQkFBRCxDQXpCUzs7QUEyQmpCO0FBQ0FDLGFBQVMsQ0FBQyx5QkFBRCxDQTVCUTtBQTZCakJDLGFBQVMsQ0FBQyw0QkFBRCxDQTdCUTtBQThCakJDLGFBQVMsQ0FBQywyQkFBRCxDQTlCUTs7QUFnQ2pCO0FBQ0FDLFlBQVEsQ0FBQyxlQUFELENBakNTO0FBa0NqQkMsV0FBTyxDQUFDLDBCQUFELENBbENVO0FBbUNqQkMsV0FBTyxDQUFDLGVBQUQsQ0FuQ1U7QUFvQ2pCQyxXQUFPLEVBcENVO0FBcUNqQkMsWUFBUSxDQUFDLDBCQUFELENBckNTO0FBc0NqQkMsU0FBSyxDQUFDLGFBQUQsQ0F0Q1k7QUF1Q2pCQyxVQUFNLEVBdkNXO0FBd0NqQkMsWUFBUTtBQXhDUyxDQUFyQjs7QUE0Q08sSUFBTUMsMEJBQVM7QUFDbEI7QUFDQXJCLFdBQU8sU0FGVztBQUdsQkMsV0FBTyxTQUhXO0FBSWxCQyxXQUFPLFNBSlc7O0FBTWxCO0FBQ0FDLFdBQU8sU0FQVztBQVFsQkMsV0FBTyxTQVJXO0FBU2xCQyxXQUFPLFNBVFc7QUFVbEJDLFdBQU8sU0FWVztBQVdsQkMsV0FBTyxTQVhXO0FBWWxCQyxXQUFPLFNBWlc7QUFhbEJDLFlBQVEsU0FiVTs7QUFlbEI7QUFDQUMsYUFBUyxTQWhCUztBQWlCbEJDLGFBQVMsU0FqQlM7QUFrQmxCQyxhQUFTLFNBbEJTOztBQW9CbEI7QUFDQUMsWUFBUSxTQXJCVTtBQXNCbEJDLFdBQU8sU0F0Qlc7QUF1QmxCQyxXQUFPLFNBdkJXO0FBd0JsQkMsV0FBTyxTQXhCVztBQXlCbEJDLFlBQVEsU0F6QlU7QUEwQmxCQyxTQUFLLFNBMUJhO0FBMkJsQkMsVUFBTSxTQTNCWTtBQTRCbEJDLFlBQVEsU0E1QlU7QUE2QmxCckIsa0JBQWNBO0FBN0JJLENBQWYiLCJmaWxlIjoiY29sb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVzY3JpcHRpb25zID0ge1xyXG4gICAgZ3JleTE6IFsnQnV0dG9uIChkaXNhYmxlZCknXSxcclxuICAgIGdyZXkyOiBbJ0FsZXJ0IG5vdGlmaWNhdGlvbiBiYWNrZ3JvdW5kJ10sXHJcbiAgICBncmV5MzogW1xyXG4gICAgICAgICdFZGl0ZWQgZ3JpZCByb3cnLFxyXG4gICAgICAgICdEaXNhYmxlZCBncmlkIHRleHQnLFxyXG4gICAgICAgICdJbnB1dCBib3JkZXInLFxyXG4gICAgXSxcclxuICAgIGdyZXk0OiBbXHJcbiAgICAgICAgJ1NlbGVjdCBob3ZlciBiYWNrZ3JvdW5kJyxcclxuICAgICAgICAnR3JpZCBoaWdobGlnaHRlZCByb3cgYmFja2dyb3VuZCcsXHJcbiAgICAgICAgJ0dyaWQgaGVhZGVyIGJhY2tncm91bmQnLFxyXG4gICAgXSxcclxuICAgIGdyZXk1OiBbXHJcbiAgICAgICAgJ1NlbGVjdGVkIGdyaWQgcm93IGJhY2tncm91bmQnLFxyXG4gICAgICAgICdTZWxlY3RlZCBzZWxlY3QgaXRlbSBiYWNrZ3JvdW5kJyxcclxuICAgIF0sXHJcbiAgICBncmV5NjogWydBcHAgYmFja2dyb3VuZCcsICdHcmlkIHJvdyBib3JkZXInXSxcclxuICAgIGdyZXk3OiBbJ0dyaWQgb3V0ZXIgYm9yZGVyJ10sXHJcbiAgICBncmV5ODogWydCdXR0b24gKGhvdmVyKSddLFxyXG4gICAgZ3JleTk6IFtcclxuICAgICAgICAnR3JpZCB0ZXh0JyxcclxuICAgICAgICAnQnV0dG9uIGJhY2tncm91bmQnLFxyXG4gICAgICAgICdDaGVja2JveCBib3JkZXInLFxyXG4gICAgXSxcclxuICAgIGdyZXkxMDogWydCdXR0b24gKHByZXNzZWQpJ10sXHJcblxyXG4gICAgLy8gT3Jhbmdlc1xyXG4gICAgb3JhbmdlMTogWydQcmlvcml0eSBidXR0b24gKGhvdmVyKSddLFxyXG4gICAgb3JhbmdlMjogWydQcmlvcml0eSBidXR0b24gYmFja2dyb3VuZCddLFxyXG4gICAgb3JhbmdlMzogWydQcmlvcml0eSBidXR0b24gKHByZXNzZWQpJ10sXHJcblxyXG4gICAgLy8gT3RoZXIgY29sb3JzIGUuZy4gZ3JhcGhzXHJcbiAgICB5ZWxsb3c6IFsnV2FybmluZyBjb2xvciddLFxyXG4gICAgd2hpdGU6IFsnQ29udGVudCBiYWNrZ3JvdW5kIGNvbG9yJ10sXHJcbiAgICBncmVlbjogWydTdWNjZXNzIGNvbG9yJ10sXHJcbiAgICBibGFjazogW10sXHJcbiAgICBwZXRyb2w6IFsnVG9vbHRpcCBiYWNrZ3JvdW5kIGNvbG9yJ10sXHJcbiAgICByZWQ6IFsnRXJyb3IgY29sb3InXSxcclxuICAgIGJsdWU6IFtdLFxyXG4gICAgdmlvbGV0OiBbXSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xyXG4gICAgLy8gR3JleXNcclxuICAgIGdyZXkxOiAnI0YwRjBGMCcsXHJcbiAgICBncmV5MjogJyNFQUVBRUEnLFxyXG4gICAgZ3JleTM6ICcjQ0NDQ0NDJyxcclxuXHJcbiAgICAvLyBCbHVpc2ggZ3JleXNcclxuICAgIGdyZXk0OiAnI0VGRjJGNCcsXHJcbiAgICBncmV5NTogJyNFNkU5RUInLFxyXG4gICAgZ3JleTY6ICcjRDNEQURFJyxcclxuICAgIGdyZXk3OiAnI0E0QUZCNicsXHJcbiAgICBncmV5ODogJyM3NzgxOGMnLFxyXG4gICAgZ3JleTk6ICcjNjc3MDdDJyxcclxuICAgIGdyZXkxMDogJyM1ODVGNjgnLFxyXG5cclxuICAgIC8vIE9yYW5nZXNcclxuICAgIG9yYW5nZTE6ICcjRkY3NTE3JyxcclxuICAgIG9yYW5nZTI6ICcjRUM2NjA4JyxcclxuICAgIG9yYW5nZTM6ICcjZDM1YzBiJyxcclxuXHJcbiAgICAvLyBPdGhlciBjb2xvcnMgZS5nLiBncmFwaHNcclxuICAgIHllbGxvdzogJyNGRUNBMUQnLFxyXG4gICAgd2hpdGU6ICcjRkZGRkZGJyxcclxuICAgIGdyZWVuOiAnIzNBQTU3QicsXHJcbiAgICBibGFjazogJyMwMDAwMDAnLFxyXG4gICAgcGV0cm9sOiAnIzAwNjA3MCcsXHJcbiAgICByZWQ6ICcjRDgyNTE1JyxcclxuICAgIGJsdWU6ICcjMTZBRUQ2JyxcclxuICAgIHZpb2xldDogJyM5NDNCQTMnLFxyXG4gICAgZGVzY3JpcHRpb25zOiBkZXNjcmlwdGlvbnMsXHJcbn07XHJcbiJdfQ==