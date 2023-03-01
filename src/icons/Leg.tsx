import * as React from "react";
import { SVGProps } from "react";
const Leg = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}><g id="leg"><g id="Group"><mask id="mask0_285_170" style={{
        maskType: "alpha"
      }} maskUnits="userSpaceOnUse" x={3} y={0} width={24} height={30}><g id="mask0_20_54"><path id="Vector" d="M26.4507 0H3.54919V30H26.4507V0Z" fill="url(#pattern0)" /></g></mask><g mask="url(#mask0_285_170)"><g id="Group_2"><path id="Vector_2" d="M28.4864 0H3.54919V32.1802H28.4864V0Z" fill={props.color} /></g></g></g></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}><use xlinkHref="#image0_285_170" transform="scale(0.00203666 0.0015361)" /></pattern><image id="image0_285_170" data-name="image0_20_54.png" width={491} height={651} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAesAAAKLCAQAAAB85mjtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0zMFQxNDoyMjowMiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0zMFQxNDoyMjoxNiswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDctMzBUMTQ6MjI6MTYrMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxYjRiM2ZkLWU3ZjEtMjc0Zi1hNWQzLWY5NjRlYTUxOTU1NyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmNjYjBhY2U4LTdmZjEtYmE0Yi1iMWQzLWU0YzYwYmUzYTY3YiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE5MTEwMzc1LWE4NzMtNmY0MS1iYzQ3LTlhYmZhZWU1ZGJjZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTkxMTAzNzUtYTg3My02ZjQxLWJjNDctOWFiZmFlZTVkYmNkIiBzdEV2dDp3aGVuPSIyMDIxLTA3LTMwVDE0OjIyOjAyKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0ZTAyODlhLThkMGYtNDk0My04YTkwLWIwNWE4ZjNhMzFiMCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0zMFQxNDoyMjoxNiswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMWI0YjNmZC1lN2YxLTI3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" /></defs></svg>;
export default Leg;