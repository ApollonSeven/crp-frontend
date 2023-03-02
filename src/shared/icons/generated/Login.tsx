import * as React from "react";
import { SVGProps } from "react";
const Login = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="login"><g id="login_2"><path d="M14.423 15C16.4837 15 18.2678 14.2609 19.726 12.8027C21.1837 11.3447 21.923 9.56072 21.923 7.49976C21.923 5.43951 21.1839 3.65533 19.7257 2.19685C18.2676 0.739095 16.4834 0 14.423 0C12.3621 0 10.5782 0.739095 9.12026 2.19709C7.66231 3.65509 6.923 5.43928 6.923 7.49976C6.923 9.56072 7.66231 11.3449 9.12026 12.8029C10.5787 14.2607 12.3628 15 14.423 15ZM10.4107 3.48736C11.5294 2.36862 12.8418 1.82481 14.423 1.82481C16.004 1.82481 17.3166 2.36862 18.4355 3.48736C19.5542 4.60634 20.0982 5.91894 20.0982 7.49976C20.0982 9.08106 19.5542 10.3934 18.4355 11.5124C17.3166 12.6314 16.004 13.1752 14.423 13.1752C12.8422 13.1752 11.5299 12.6311 10.4107 11.5124C9.29179 10.3937 8.74776 9.08106 8.74776 7.49976C8.74776 5.91894 9.29179 4.60634 10.4107 3.48736Z" fill={props.color} /><path d="M27.6307 23.2959C27.5896 22.7306 27.5065 22.1138 27.3842 21.4625C27.2607 20.8064 27.1017 20.1861 26.9113 19.6192C26.7145 19.0332 26.4473 18.4545 26.1165 17.9C25.7737 17.3244 25.3707 16.8232 24.9185 16.4108C24.4456 15.9794 23.8667 15.6325 23.1972 15.3794C22.5301 15.1277 21.7907 15.0002 20.9999 15.0002C20.6893 15.0002 20.3889 15.1218 19.8088 15.4819C19.4518 15.704 19.0342 15.9608 18.568 16.2448C18.1695 16.487 17.6295 16.7139 16.9626 16.9193C16.3119 17.1201 15.6513 17.2219 14.999 17.2219C14.3472 17.2219 13.6865 17.1201 13.0354 16.9193C12.3692 16.7141 11.829 16.4872 11.4311 16.245C10.9694 15.9636 10.5516 15.7068 10.1892 15.4817C9.60958 15.1215 9.3092 15 8.9986 15C8.2075 15 7.46839 15.1277 6.80147 15.3797C6.13246 15.6322 5.55329 15.9791 5.07998 16.411C4.62778 16.8237 4.2248 17.3246 3.88217 17.9C3.55185 18.4545 3.28443 19.033 3.08758 19.6194C2.89747 20.1863 2.73846 20.8064 2.61496 21.4625C2.49239 22.1129 2.40952 22.7299 2.36844 23.2966C2.32804 23.8507 2.30762 24.4274 2.30762 25.01C2.30762 26.5247 2.81251 27.7509 3.80812 28.6552C4.79143 29.5475 6.0923 30 7.67475 30H22.3251C23.9071 30 25.208 29.5475 26.1915 28.6552C27.1873 27.7515 27.6922 26.5249 27.6922 25.0098C27.692 24.4252 27.6713 23.8485 27.6307 23.2959ZM24.9621 27.4232C24.3124 28.013 23.4498 28.2996 22.3249 28.2996H7.67475C6.54961 28.2996 5.687 28.013 5.0375 27.4234C4.40029 26.845 4.09063 26.0554 4.09063 25.01C4.09063 24.4663 4.10943 23.9295 4.14703 23.4142C4.18371 22.9085 4.25869 22.3531 4.36988 21.7629C4.47968 21.1801 4.61942 20.6331 4.78563 20.1378C4.94511 19.663 5.16261 19.1928 5.43235 18.7399C5.68979 18.3082 5.98599 17.9378 6.31283 17.6394C6.61855 17.3603 7.00389 17.1318 7.45794 16.9605C7.87787 16.802 8.34979 16.7152 8.86211 16.7021C8.92455 16.7338 9.03574 16.7942 9.21588 16.9062C9.58242 17.134 10.0049 17.3939 10.4719 17.6784C10.9984 17.9985 11.6767 18.2876 12.4871 18.5371C13.3156 18.7926 14.1605 18.9223 14.9992 18.9223C15.8379 18.9223 16.6831 18.7926 17.5111 18.5373C18.3222 18.2874 19.0003 17.9985 19.5274 17.6779C20.0054 17.3866 20.416 17.1343 20.7826 16.9062C20.9627 16.7944 21.0739 16.7338 21.1363 16.7021C21.6489 16.7152 22.1208 16.802 22.541 16.9605C22.9948 17.1318 23.3801 17.3605 23.6859 17.6394C24.0127 17.9376 24.3089 18.308 24.5663 18.7401C24.8363 19.1928 25.054 19.6632 25.2133 20.1376C25.3797 20.6335 25.5197 21.1803 25.6293 21.7627C25.7402 22.354 25.8154 22.9097 25.8521 23.4144C25.89 23.9277 25.909 24.4648 25.9092 25.01C25.909 26.0556 25.5993 26.845 24.9621 27.4232Z" fill={props.color} /></g></g></svg>;
export default Login;