// Certain variable values are temporarily imported from oc-cm-common-styles
import { colors } from './colors';
import { constants } from './constants';

/**
 * Keep this alphabetical order if possible
 */
export default {
    colors: colors,
    column: {
        minWidth: '400px'
    },
    contentBackgroundColor: colors.white,
    formControls: {
        button: {
            backgroundColor: colors.grey10,
            primaryBackgroundColor: colors.orange2,
            textColor: colors.white,
            minWidth: '70px'
        },
        input: {
            borderColor: colors.grey7,
            focusBorderColor: colors.yellow,
            height: '34px'
        }
    },
    halfGutterWidth: '0.5rem',
    header: {
        height: constants.navBarHeight,
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
            fontSize: constants.fontSize.h4
        }
    },
    inputRow: {
        flexDirection: 'row',
        labelWidth: '225px',
        errorContainer: {
            height: '1.5rem'
        },
        requiredIndicator: {
            fontSize: constants.fontSize.h4
        }
    },
    screenSizes: {
        medium: '40rem',
        large: '64rem',
        xLarge: '75rem'
    },
    text: {
        title: {
            fontSize: constants.fontSize.medium,
            fontWeight: constants.fontWeight.bold
        },
        subTitle: {
            fontSize: constants.fontSize.medium,
            fontWeight: constants.fontWeight.normal
        },
        error: {
            fontSize: constants.fontSize.small,
            color: colors.red
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb25zdGFudHMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ3aGl0ZSIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImdyZXkxMCIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiLCJvcmFuZ2UyIiwidGV4dENvbG9yIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImdyZXk3IiwiZm9jdXNCb3JkZXJDb2xvciIsInllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsIm5hdkJhckhlaWdodCIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImg0IiwiaW5wdXRSb3ciLCJzY3JlZW5TaXplcyIsIm1lZGl1bSIsImxhcmdlIiwieExhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvbGQiLCJzdWJUaXRsZSIsIm5vcm1hbCIsImVycm9yIiwic21hbGwiLCJjb2xvciIsInJlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxTQUFTQSxNQUFULFFBQXVCLFVBQXZCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7QUFFQTs7O0FBR0EsZUFBZTtBQUNYRCxrQkFEVztBQUVYRSxZQUFRO0FBQ0pDLGtCQUFVO0FBRE4sS0FGRztBQUtYQyw0QkFBd0JKLE9BQU9LLEtBTHBCO0FBTVhDLGtCQUFjO0FBQ1ZDLGdCQUFRO0FBQ0pDLDZCQUFpQlIsT0FBT1MsTUFEcEI7QUFFSkMsb0NBQXdCVixPQUFPVyxPQUYzQjtBQUdKQyx1QkFBV1osT0FBT0ssS0FIZDtBQUlKRixzQkFBVTtBQUpOLFNBREU7QUFPVlUsZUFBTztBQUNIQyx5QkFBYWQsT0FBT2UsS0FEakI7QUFFSEMsOEJBQWtCaEIsT0FBT2lCLE1BRnRCO0FBR0hDLG9CQUFRO0FBSEw7QUFQRyxLQU5IO0FBbUJYQyxxQkFBaUIsUUFuQk47QUFvQlhDLFlBQVE7QUFDSkYsZ0JBQVFqQixVQUFVb0IsWUFEZDtBQUVKZCxnQkFBUTtBQUNKVyxvQkFBUTtBQURKO0FBRkosS0FwQkc7QUEwQlhJLGlCQUFhLE1BMUJGO0FBMkJYQyxpQkFBYTtBQUNUQyx1QkFBZSxRQUROO0FBRVRDLG9CQUFZLE9BRkg7QUFHVEMsa0NBQTBCLFFBSGpCO0FBSVRDLHdCQUFnQjtBQUNaVCxvQkFBUTtBQURJLFNBSlA7QUFPVFUsMkJBQW1CO0FBQ2ZDLHNCQUFVNUIsVUFBVTRCLFFBQVYsQ0FBbUJDO0FBRGQ7QUFQVixLQTNCRjtBQXNDWEMsY0FBVTtBQUNOUCx1QkFBZSxLQURUO0FBRU5DLG9CQUFZLE9BRk47QUFHTkUsd0JBQWdCO0FBQ1pULG9CQUFRO0FBREksU0FIVjtBQU1OVSwyQkFBbUI7QUFDZkMsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkM7QUFEZDtBQU5iLEtBdENDO0FBZ0RYRSxpQkFBYTtBQUNUQyxnQkFBUSxPQURDO0FBRVRDLGVBQU8sT0FGRTtBQUdUQyxnQkFBUTtBQUhDLEtBaERGO0FBcURYQyxVQUFNO0FBQ0ZDLGVBQU87QUFDSFIsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQkksTUFEMUI7QUFFSEssd0JBQVlyQyxVQUFVcUMsVUFBVixDQUFxQkM7QUFGOUIsU0FETDtBQUtGQyxrQkFBVTtBQUNOWCxzQkFBVTVCLFVBQVU0QixRQUFWLENBQW1CSSxNQUR2QjtBQUVOSyx3QkFBWXJDLFVBQVVxQyxVQUFWLENBQXFCRztBQUYzQixTQUxSO0FBU0ZDLGVBQU87QUFDSGIsc0JBQVU1QixVQUFVNEIsUUFBVixDQUFtQmMsS0FEMUI7QUFFSEMsbUJBQU81QyxPQUFPNkM7QUFGWDtBQVRMO0FBckRLLENBQWYiLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDZXJ0YWluIHZhcmlhYmxlIHZhbHVlcyBhcmUgdGVtcG9yYXJpbHkgaW1wb3J0ZWQgZnJvbSBvYy1jbS1jb21tb24tc3R5bGVzXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29sb3JzJztcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEtlZXAgdGhpcyBhbHBoYWJldGljYWwgb3JkZXIgaWYgcG9zc2libGVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbG9ycyxcclxuICAgIGNvbHVtbjoge1xyXG4gICAgICAgIG1pbldpZHRoOiAnNDAwcHgnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgIGZvcm1Db250cm9sczoge1xyXG4gICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmV5MTAsXHJcbiAgICAgICAgICAgIHByaW1hcnlCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5vcmFuZ2UyLFxyXG4gICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbG9ycy53aGl0ZSxcclxuICAgICAgICAgICAgbWluV2lkdGg6ICc3MHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcnMuZ3JleTcsXHJcbiAgICAgICAgICAgIGZvY3VzQm9yZGVyQ29sb3I6IGNvbG9ycy55ZWxsb3csXHJcbiAgICAgICAgICAgIGhlaWdodDogJzM0cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGhlaWdodDogY29uc3RhbnRzLm5hdkJhckhlaWdodCxcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMnJlbScsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBndXR0ZXJXaWR0aDogJzFyZW0nLFxyXG4gICAgaW5wdXRDb2x1bW46IHtcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBsYWJlbFdpZHRoOiAnMjI1cHgnLFxyXG4gICAgICAgIGxhYmVsQ29udGFpbmVyTGluZUhlaWdodDogJzEuNXJlbScsXHJcbiAgICAgICAgZXJyb3JDb250YWluZXI6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuaDQsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBpbnB1dFJvdzoge1xyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXHJcbiAgICAgICAgZXJyb3JDb250YWluZXI6IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuaDQsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzY3JlZW5TaXplczoge1xyXG4gICAgICAgIG1lZGl1bTogJzQwcmVtJyxcclxuICAgICAgICBsYXJnZTogJzY0cmVtJyxcclxuICAgICAgICB4TGFyZ2U6ICc3NXJlbScsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUubWVkaXVtLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBjb25zdGFudHMuZm9udFdlaWdodC5ib2xkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ViVGl0bGU6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IGNvbnN0YW50cy5mb250U2l6ZS5tZWRpdW0sXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGNvbnN0YW50cy5mb250V2VpZ2h0Lm5vcm1hbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb25zdGFudHMuZm9udFNpemUuc21hbGwsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMucmVkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG4iXX0=