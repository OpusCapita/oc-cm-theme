'use strict';

exports.__esModule = true;

var _colors = require('./colors');

var _constants = require('./constants');

/**
 * Keep this alphabetical order if possible
 */
// Certain variable values are temporarily imported from oc-cm-common-styles
exports.default = {
    colors: _colors.colors,
    column: {
        minWidth: '400px'
    },
    contentBackgroundColor: _colors.colors.white,
    formControls: {
        button: {
            backgroundColor: _colors.colors.grey10,
            primaryBackgroundColor: _colors.colors.orange2,
            textColor: _colors.colors.white,
            minWidth: '70px'
        },
        input: {
            borderColor: _colors.colors.grey7,
            focusBorderColor: _colors.colors.yellow,
            height: '34px'
        }
    },
    halfGutterWidth: '0.5rem',
    header: {
        height: _constants.constants.navBarHeight,
        button: {
            height: '2rem'
        }
    },
    gutterWidth: '1rem',
    inputColumn: {
        flexDirection: 'column',
        labelWidth: '225px',
        labelContainerLineHeight: '1.5rem',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: _constants.constants.fontSize.h4
        }
    },
    inputRow: {
        flexDirection: 'row',
        labelWidth: '225px',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: _constants.constants.fontSize.h4
        }
    },
    screenSizes: {
        medium: '40rem',
        large: '64rem',
        xLarge: '75rem'
    },
    text: {
        title: {
            fontSize: _constants.constants.fontSize.medium,
            fontWeight: _constants.constants.fontWeight.bold
        },
        subTitle: {
            fontSize: _constants.constants.fontSize.medium,
            fontWeight: _constants.constants.fontWeight.normal
        },
        error: {
            fontSize: _constants.constants.fontSize.small,
            color: _colors.colors.red
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsImNvbnN0YW50cyIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUVBOzs7QUFKQTtrQkFPZTtBQUNYQSwwQkFEVztBQUVYQyxZQUFRO0FBQ0pDLGtCQUFVO0FBRE4sS0FGRztBQUtYQyw0QkFBd0JILGVBQU9JLEtBTHBCO0FBTVhDLGtCQUFjO0FBQ1ZDLGdCQUFRO0FBQ0pDLDZCQUFpQlAsZUFBT1EsTUFEcEI7QUFFSkMsb0NBQXdCVCxlQUFPVSxPQUYzQjtBQUdKQyx1QkFBV1gsZUFBT0ksS0FIZDtBQUlKRixzQkFBVTtBQUpOLFNBREU7QUFPVlUsZUFBTztBQUNIQyx5QkFBYWIsZUFBT2MsS0FEakI7QUFFSEMsOEJBQWtCZixlQUFPZ0IsTUFGdEI7QUFHSEMsb0JBQVE7QUFITDtBQVBHLEtBTkg7QUFtQlhDLHFCQUFpQixRQW5CTjtBQW9CWEMsWUFBUTtBQUNKRixnQkFBUUcscUJBQVVDLFlBRGQ7QUFFSmYsZ0JBQVE7QUFDSlcsb0JBQVE7QUFESjtBQUZKLEtBcEJHO0FBMEJYSyxpQkFBYSxNQTFCRjtBQTJCWEMsaUJBQWE7QUFDVEMsdUJBQWUsUUFETjtBQUVUQyxvQkFBWSxPQUZIO0FBR1RDLGtDQUEwQixRQUhqQjtBQUlUQyx3QkFBZ0I7QUFDWlYsb0JBQVE7QUFESSxTQUpQO0FBT1RXLDJCQUFtQjtBQUNmQyxzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJDO0FBRGQ7QUFQVixLQTNCRjtBQXNDWEMsY0FBVTtBQUNOUCx1QkFBZSxLQURUO0FBRU5DLG9CQUFZLE9BRk47QUFHTkUsd0JBQWdCO0FBQ1pWLG9CQUFRO0FBREksU0FIVjtBQU1OVywyQkFBbUI7QUFDZkMsc0JBQVVULHFCQUFVUyxRQUFWLENBQW1CQztBQURkO0FBTmIsS0F0Q0M7QUFnRFhFLGlCQUFhO0FBQ1RDLGdCQUFRLE9BREM7QUFFVEMsZUFBTyxPQUZFO0FBR1RDLGdCQUFRO0FBSEMsS0FoREY7QUFxRFhDLFVBQU07QUFDRkMsZUFBTztBQUNIUixzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJJLE1BRDFCO0FBRUhLLHdCQUFZbEIscUJBQVVrQixVQUFWLENBQXFCQztBQUY5QixTQURMO0FBS0ZDLGtCQUFVO0FBQ05YLHNCQUFVVCxxQkFBVVMsUUFBVixDQUFtQkksTUFEdkI7QUFFTkssd0JBQVlsQixxQkFBVWtCLFVBQVYsQ0FBcUJHO0FBRjNCLFNBTFI7QUFTRkMsZUFBTztBQUNIYixzQkFBVVQscUJBQVVTLFFBQVYsQ0FBbUJjLEtBRDFCO0FBRUhDLG1CQUFPNUMsZUFBTzZDO0FBRlg7QUFUTDtBQXJESyxDIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2VydGFpbiB2YXJpYWJsZSB2YWx1ZXMgYXJlIHRlbXBvcmFyaWx5IGltcG9ydGVkIGZyb20gb2MtY20tY29tbW9uLXN0eWxlc1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XHJcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBLZWVwIHRoaXMgYWxwaGFiZXRpY2FsIG9yZGVyIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb2xvcnMsXHJcbiAgICBjb2x1bW46IHtcclxuICAgICAgICBtaW5XaWR0aDogJzQwMHB4JyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICBmb3JtQ29udHJvbHM6IHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JleTEwLFxyXG4gICAgICAgICAgICBwcmltYXJ5QmFja2dyb3VuZENvbG9yOiBjb2xvcnMub3JhbmdlMixcclxuICAgICAgICAgICAgdGV4dENvbG9yOiBjb2xvcnMud2hpdGUsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JzLmdyZXk3LFxyXG4gICAgICAgICAgICBmb2N1c0JvcmRlckNvbG9yOiBjb2xvcnMueWVsbG93LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczNHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGhhbGZHdXR0ZXJXaWR0aDogJzAuNXJlbScsXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgICBoZWlnaHQ6IGNvbnN0YW50cy5uYXZCYXJIZWlnaHQsXHJcbiAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZ3V0dGVyV2lkdGg6ICcxcmVtJyxcclxuICAgIGlucHV0Q29sdW1uOiB7XHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcclxuICAgICAgICBsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxyXG4gICAgICAgIGVycm9yQ29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzEuNXJlbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXF1aXJlZEluZGljYXRvcjoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaW5wdXRSb3c6IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICBsYWJlbFdpZHRoOiAnMjI1cHgnLFxyXG4gICAgICAgIGVycm9yQ29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzEuNXJlbScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXF1aXJlZEluZGljYXRvcjoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLmg0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NyZWVuU2l6ZXM6IHtcclxuICAgICAgICBtZWRpdW06ICc0MHJlbScsXHJcbiAgICAgICAgbGFyZ2U6ICc2NHJlbScsXHJcbiAgICAgICAgeExhcmdlOiAnNzVyZW0nLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLm1lZGl1bSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogY29uc3RhbnRzLmZvbnRXZWlnaHQuYm9sZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YlRpdGxlOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUubWVkaXVtLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb25zdGFudHMuZm9udFdlaWdodC5ub3JtYWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogY29uc3RhbnRzLmZvbnRTaXplLnNtYWxsLFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzLnJlZCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuIl19