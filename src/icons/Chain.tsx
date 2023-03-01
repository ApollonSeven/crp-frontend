import * as React from "react";
import { SVGProps } from "react";
const Chain = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g id="chain"><path id="chain_2" d="M28.0758 5.403V4.1937C28.0758 3.94874 27.8792 3.75 27.6363 3.75H25.6938C25.4512 3.75 25.2544 3.94874 25.2544 4.1937V5.403C24.0919 5.95253 23.3302 7.14058 23.3302 8.45271V10.0625C23.3302 11.2143 23.9168 12.2706 24.846 12.8832C23.9168 13.4961 23.3302 14.5524 23.3302 15.7039V17.3137C23.3302 17.5628 23.3581 17.8105 23.4121 18.052C23.1953 18.0081 22.9745 17.9845 22.7527 17.9845C21.8566 17.9845 21.0162 18.3374 20.3865 18.978L19.2634 20.1205C18.9894 20.3992 18.7685 20.7211 18.6072 21.0726C18.0029 20.1194 16.9482 19.516 15.7972 19.516H14.2028C13.052 19.516 11.9973 20.1191 11.3928 21.0724C11.2315 20.7211 11.0106 20.3992 10.7368 20.1205L9.61349 18.978C8.98384 18.3374 8.14362 17.9845 7.24731 17.9845C7.02553 17.9845 6.80466 18.0081 6.58813 18.052C6.64215 17.8105 6.66985 17.5628 6.66985 17.3139V15.7039C6.66985 14.5524 6.08345 13.4961 5.15419 12.8834C6.08345 12.2706 6.66985 11.2143 6.66985 10.0627V8.45294C6.66985 7.14081 5.90836 5.95276 4.74564 5.40323V4.1937C4.74564 3.94874 4.54903 3.75 4.30618 3.75H2.36366C2.12082 3.75 1.92421 3.94874 1.92421 4.1937V5.403C0.761719 5.95253 0 7.14058 0 8.45271V10.0625C0 11.214 0.586395 12.2703 1.51588 12.8832C0.586395 13.4961 0 14.5524 0 15.7039V17.3137C0 19.1703 1.49597 20.6809 3.33481 20.6809C3.55728 20.6809 3.77724 20.6578 3.99307 20.6139C3.74565 21.7238 4.06723 22.8955 4.87976 23.7221L6.00288 24.8646C6.633 25.5054 7.47368 25.8583 8.36998 25.8583C9.2569 25.8583 10.0912 25.5117 10.7192 24.8822C10.8936 24.7075 11.0474 24.5147 11.1788 24.3074H11.1823C11.7265 25.4812 12.9032 26.25 14.2028 26.25H15.7972C17.0968 26.25 18.2735 25.4812 18.8177 24.3074H18.8212C18.9526 24.5147 19.1064 24.7075 19.2808 24.8822C19.9088 25.5117 20.7431 25.8583 21.63 25.8583C22.5263 25.8583 23.367 25.5054 23.9971 24.8646L25.1202 23.7221C25.9328 22.8955 26.2541 21.7238 26.0067 20.6139C26.2228 20.6578 26.4425 20.6809 26.665 20.6809C28.5038 20.6809 30 19.1703 30 17.3137V15.7039C30 14.5524 29.4134 13.4961 28.4841 12.8832C29.4136 12.2703 30 11.214 30 10.0625V8.45271C30 7.14058 29.2383 5.95253 28.0758 5.403ZM27.1786 15.7039V17.3137C27.1786 17.4059 27.1536 17.4935 27.1104 17.5697C27.0726 17.5154 27.0325 17.4625 26.9863 17.4126C26.7657 17.1739 26.469 17.02 26.1518 16.9744V15.7039C26.1518 15.6854 26.153 15.6672 26.1548 15.6491C26.3132 15.7115 26.4851 15.746 26.6652 15.746C26.8451 15.746 27.017 15.7115 27.1754 15.6491C27.1774 15.6672 27.1786 15.6854 27.1786 15.7039ZM24.2686 20.708C24.0452 20.9183 23.7037 20.9522 23.483 20.7135C23.2887 20.5034 23.3013 20.1503 23.5091 19.9546L25.5922 17.9919C25.8044 17.792 26.1463 17.8043 26.3438 18.0181C26.5379 18.2281 26.5256 18.5815 26.3177 18.777C26.3177 18.777 24.2782 20.6989 24.2686 20.708ZM20.5788 23.06C20.5032 23.2657 20.3025 23.4201 20.0787 23.4201C20.0787 23.4201 17.224 23.4196 17.2213 23.4196C16.94 23.4166 16.6976 23.1721 16.6976 22.883C16.6976 22.5951 16.9448 22.3459 17.2295 22.3459H20.0787C20.3673 22.3459 20.6106 22.5923 20.6106 22.883C20.6106 22.9445 20.5991 23.0041 20.5788 23.06ZM13.1671 23.2347C13.0703 23.3452 12.9305 23.417 12.7787 23.4196C12.776 23.4196 9.92134 23.4201 9.92134 23.4201C9.63341 23.4201 9.38942 23.1737 9.38942 22.883C9.38942 22.5946 9.63524 22.3462 9.92134 22.3462H12.7705C13.0591 22.3462 13.3024 22.5921 13.3024 22.883C13.3024 23.0154 13.2509 23.1393 13.1671 23.2347ZM5.86349 20.8108C5.82848 20.7914 3.68225 18.777 3.68225 18.777C3.68179 18.7765 3.68134 18.776 3.68088 18.7756C3.47099 18.5764 3.45955 18.2309 3.65616 18.0181C3.85139 17.8068 4.19861 17.7964 4.40781 17.9919L6.49086 19.9546C6.49223 19.9558 6.49315 19.9569 6.49429 19.9581C6.70189 20.1573 6.71219 20.5023 6.51695 20.7135C6.3517 20.8921 6.07109 20.9257 5.86349 20.8108ZM3.33481 8.49477C3.51494 8.49477 3.68683 8.46034 3.84544 8.39794C3.84727 8.41597 3.84842 8.43446 3.84842 8.45271V10.0627C3.84842 10.0812 3.84727 10.0992 3.84544 10.1175C3.68706 10.0551 3.51494 10.0207 3.33504 10.0207C3.15514 10.0207 2.98302 10.0551 2.82463 10.1175C2.8228 10.0992 2.82166 10.0812 2.82166 10.0627V8.45271C2.82166 8.43446 2.8228 8.4162 2.82463 8.39794C2.98302 8.46011 3.15491 8.49477 3.33481 8.49477ZM3.86375 14.3763C3.83492 14.6397 3.60123 14.8586 3.33481 14.8586C3.04688 14.8586 2.80312 14.6127 2.80312 14.3215V11.4449C2.80312 11.1551 3.04596 10.9078 3.33481 10.9078C3.61931 10.9078 3.86673 11.1565 3.86673 11.4449V14.3217C3.86673 14.34 3.86581 14.3583 3.86375 14.3763ZM2.82143 17.3137C2.82143 17.3137 2.82257 15.6672 2.8244 15.6491C2.98279 15.7113 3.15491 15.746 3.33481 15.746C3.51494 15.746 3.68683 15.7113 3.84521 15.6491C3.84705 15.6672 3.84819 16.9744 3.84819 16.9744C3.53096 17.02 3.23433 17.1739 3.01346 17.4126C2.96745 17.4623 2.92717 17.5154 2.88963 17.5697C2.84637 17.4935 2.82143 17.4059 2.82143 17.3137ZM7.15965 21.319C7.28394 21.1845 7.37617 21.0315 7.43912 20.87C7.50298 20.8958 7.56134 20.9344 7.61101 20.9848L8.72955 22.1225C8.59108 22.3427 8.51051 22.6034 8.51051 22.883C8.51051 22.9184 8.51234 22.9535 8.51486 22.9881C8.46771 23.0022 8.4185 23.0099 8.36838 23.0099C8.23082 23.0099 8.10196 22.9558 8.0056 22.8576L6.88225 21.7151C6.84837 21.6804 6.82022 21.6416 6.79756 21.6C6.93146 21.5272 7.05437 21.4329 7.15965 21.319ZM14.0893 22.3778C14.1261 22.3693 14.1641 22.3647 14.2028 22.3647H15.7972C15.8359 22.3647 15.8739 22.3693 15.9105 22.3776C15.8514 22.5347 15.8187 22.7051 15.8187 22.883C15.8187 23.0609 15.8514 23.231 15.9105 23.3882C15.8739 23.3967 15.8359 23.4013 15.7972 23.4013H14.2028C14.1641 23.4013 14.1261 23.3965 14.0893 23.3882C14.1486 23.231 14.1813 23.0607 14.1813 22.8828C14.1813 22.7051 14.1486 22.535 14.0893 22.3778ZM21.2704 22.1225L22.389 20.9848C22.4387 20.9342 22.497 20.8956 22.5609 20.87C22.6238 21.0315 22.7161 21.1845 22.8403 21.319C22.9456 21.4329 23.0685 21.5272 23.2024 21.6C23.1798 21.6416 23.1516 21.6804 23.1178 21.7151L21.9944 22.8576C21.898 22.9556 21.7692 23.0096 21.6316 23.0096C21.5815 23.0096 21.5323 23.0022 21.4851 22.9881C21.4877 22.9532 21.4895 22.9184 21.4895 22.883C21.4895 22.6034 21.4089 22.3427 21.2704 22.1225ZM26.6652 8.49477C26.8451 8.49477 27.017 8.46034 27.1754 8.39794C27.1772 8.41597 27.1783 8.43446 27.1783 8.45271V10.0625C27.1783 10.081 27.1772 10.0992 27.1754 10.1175C27.017 10.0551 26.8451 10.0204 26.6652 10.0204C26.4851 10.0204 26.3132 10.0551 26.1548 10.1175C26.153 10.0992 26.1518 10.081 26.1518 10.0625V8.45271C26.1518 8.43423 26.153 8.41597 26.1548 8.39794C26.3132 8.46011 26.4851 8.49477 26.6652 8.49477ZM27.1939 14.3763C27.1653 14.6411 26.933 14.8586 26.6652 14.8586C26.3798 14.8586 26.1333 14.612 26.1333 14.3215V11.4449C26.1333 11.1532 26.3768 10.9078 26.6652 10.9078C26.9492 10.9078 27.1969 11.1583 27.1969 11.4449V14.3215C27.1969 14.34 27.196 14.3583 27.1939 14.3763ZM26.1333 4.63739H27.1969V7.07032C27.1969 7.35942 26.9515 7.60738 26.6652 7.60738C26.3789 7.60738 26.1333 7.3615 26.1333 7.07032V4.63739ZM24.2091 10.0625V8.45271C24.2091 7.63465 24.6112 6.88175 25.2544 6.42419V7.07032C25.2544 7.3169 25.3194 7.56694 25.4418 7.7807C25.3315 7.98475 25.2727 8.21423 25.2727 8.45271V10.0625C25.2727 10.301 25.3315 10.5305 25.4418 10.7345C25.3191 10.9485 25.2544 11.1979 25.2544 11.4449V12.0908C24.6112 11.6337 24.2091 10.8806 24.2091 10.0625ZM24.2091 15.7039C24.2091 14.8858 24.6112 14.1329 25.2544 13.6754V14.3215C25.2544 14.5662 25.3194 14.8181 25.4418 15.0319C25.3315 15.2359 25.2727 15.4654 25.2727 15.7039V17.1378C25.1717 17.194 25.0768 17.2635 24.9923 17.343L24.3034 17.9922C24.2411 17.7722 24.2091 17.5436 24.2091 17.3137V15.7039ZM19.8871 20.7456L21.0102 19.6031C21.4737 19.1317 22.0926 18.8719 22.7527 18.8719C22.9383 18.8719 23.1232 18.8932 23.3031 18.9348L22.9095 19.3057C22.7211 19.4823 22.581 19.7161 22.5124 19.9662C22.2301 20.0152 21.9706 20.1508 21.7653 20.3597C21.7653 20.3597 20.6078 21.538 20.5916 21.5563C20.5907 21.5561 20.5898 21.5558 20.5888 21.5556C20.4268 21.4916 20.2526 21.4588 20.0787 21.4588H19.3982C19.5174 21.1951 19.6822 20.9538 19.8871 20.7456ZM14.2028 20.4032H15.7972C16.6077 20.4032 17.3534 20.8092 17.8063 21.4585H17.2295C16.9714 21.4585 16.7146 21.5316 16.4944 21.6677C16.284 21.5443 16.0437 21.4773 15.7972 21.4773H14.2028C13.9565 21.4773 13.716 21.5443 13.5056 21.6677C13.3974 21.6007 13.279 21.5482 13.1538 21.5124C13.0293 21.4768 12.9 21.4585 12.7707 21.4585H12.1939C12.6469 20.8092 13.3926 20.4032 14.2028 20.4032ZM7.24731 18.8719C7.90741 18.8719 8.52631 19.1317 8.98979 19.6031L10.1129 20.7456C10.3178 20.9538 10.4826 21.1951 10.6018 21.4585H9.92134C9.74808 21.4585 9.5723 21.4921 9.41093 21.5554C9.41002 21.5558 9.40933 21.5561 9.40842 21.5563C9.39217 21.5378 9.37546 21.5198 9.35806 21.502L8.23471 20.3597C8.0294 20.1506 7.77008 20.0152 7.48764 19.9662C7.41852 19.7138 7.27913 19.485 7.09076 19.3057L6.69685 18.9346C6.87675 18.8932 7.06169 18.8719 7.24731 18.8719ZM5.79094 15.7039V17.3137C5.79094 17.5436 5.7589 17.7722 5.69664 17.9922L5.00771 17.343C4.92348 17.264 4.8278 17.194 4.72733 17.1378V15.7039C4.72733 15.4654 4.6685 15.2359 4.55818 15.0319C4.68086 14.8181 4.74564 14.5686 4.74564 14.3215V13.6754C5.38879 14.1329 5.79094 14.8858 5.79094 15.7039ZM5.79094 8.45271V10.0625C5.79094 10.8808 5.38879 11.6337 4.74564 12.091V11.4449C4.74564 11.1983 4.68063 10.948 4.55818 10.7345C4.6685 10.5307 4.72733 10.301 4.72733 10.0627V8.45271C4.72733 8.21446 4.6685 7.98475 4.55818 7.78093C4.68086 7.56648 4.74564 7.31805 4.74564 7.07055V6.42419C5.38879 6.88175 5.79094 7.63465 5.79094 8.45271ZM2.80312 4.63739H3.86673V7.07032C3.86673 7.35919 3.62114 7.60738 3.33481 7.60738C3.04985 7.60738 2.80312 7.36104 2.80312 7.07032V4.63739ZM0.878906 10.0625V8.45271C0.878906 7.63465 1.28105 6.88175 1.92421 6.42442V7.07055C1.92421 7.31505 1.98898 7.56694 2.11166 7.78093C2.00134 7.98475 1.94252 8.21446 1.94252 8.45271V10.0625C1.94252 10.301 2.00134 10.5305 2.11166 10.7345C2.10594 10.7444 2.10114 10.7546 2.09564 10.7646C1.98441 10.9735 1.92421 11.2076 1.92421 11.4449V12.091C1.28105 11.6337 0.878906 10.8806 0.878906 10.0625ZM3.33481 19.7935C1.98074 19.7935 0.878906 18.6811 0.878906 17.3137V15.7039C0.878906 14.8858 1.28105 14.1329 1.92421 13.6754V14.3215C1.92421 14.569 1.98898 14.8177 2.11166 15.0319C2.00134 15.2359 1.94252 15.4654 1.94252 15.7039V17.3137C1.94252 17.8237 2.21786 18.2852 2.64221 18.5318C2.67654 18.868 2.83768 19.195 3.08258 19.4259L3.4687 19.7898C3.4243 19.7921 3.37967 19.7935 3.33481 19.7935ZM8.36998 24.9709C7.70966 24.9709 7.09053 24.7112 6.62682 24.2395L5.50369 23.0968C4.96468 22.5486 4.71886 21.7943 4.80858 21.0521L5.16563 21.3885C5.37094 21.582 5.6369 21.7125 5.91476 21.7546C5.97977 21.9739 6.09695 22.1761 6.25854 22.3402L7.3819 23.4829C7.64465 23.7501 7.99484 23.8973 8.36861 23.8973C8.535 23.8973 8.69843 23.8674 8.85178 23.8104C8.85292 23.8118 8.85429 23.8131 8.85567 23.8145C9.11934 24.1228 9.51805 24.3074 9.92157 24.3074H10.0436C9.58832 24.7359 8.99712 24.9709 8.36998 24.9709ZM15.7972 25.3626H14.2028C13.3926 25.3626 12.6469 24.9568 12.1937 24.3074H12.7705C12.7716 24.3074 12.7725 24.3072 12.7737 24.3072C12.903 24.307 13.0284 24.2864 13.1545 24.2534C13.2793 24.2176 13.3974 24.1653 13.5056 24.0983C13.716 24.2215 13.9563 24.2887 14.2028 24.2887H15.7972C16.0435 24.2887 16.284 24.2215 16.4944 24.0983C16.6026 24.1653 16.7207 24.2178 16.8466 24.2536C16.9698 24.289 17.0984 24.307 17.2263 24.3072C17.2272 24.3072 17.2284 24.3074 17.2293 24.3074H17.8061C17.3531 24.9568 16.6074 25.3626 15.7972 25.3626ZM24.4965 23.0968L23.3732 24.2393C22.9095 24.7109 22.2906 24.9707 21.63 24.9707C21.0029 24.9707 20.4119 24.7359 19.9567 24.3074C20.1526 24.3074 20.343 24.2975 20.5302 24.2321C20.7662 24.1494 20.9811 24.0059 21.1446 23.8145C21.1457 23.8131 21.1471 23.8115 21.1485 23.8101C21.3016 23.8672 21.465 23.897 21.6316 23.897C22.0052 23.897 22.3556 23.7498 22.6183 23.4827L23.7415 22.3402C23.903 22.1759 24.0202 21.9739 24.0852 21.7546C24.0905 21.7537 24.0953 21.7525 24.1006 21.7516C24.3729 21.7067 24.6325 21.5787 24.8344 21.3885L25.1914 21.0521C25.2811 21.7943 25.0353 22.5486 24.4965 23.0968ZM29.1211 15.7039V17.3137C29.1211 18.6811 28.0193 19.7935 26.6652 19.7935C26.6203 19.7935 26.5757 19.7921 26.5313 19.7898L26.9174 19.4259C27.1626 19.195 27.3235 18.8687 27.3578 18.5318C27.7821 18.2854 28.0575 17.8237 28.0575 17.3137V15.7039C28.0575 15.4654 27.9987 15.2359 27.8883 15.0319C28.0108 14.8184 28.0758 14.5681 28.0758 14.3215V13.6754C28.7189 14.1329 29.1211 14.8858 29.1211 15.7039ZM29.1211 10.0625C29.1211 10.8806 28.7189 11.6337 28.0758 12.091V11.4449C28.0758 11.1985 28.0106 10.948 27.8883 10.7345C27.9987 10.5305 28.0575 10.301 28.0575 10.0625V8.45271C28.0575 8.21446 27.9987 7.98475 27.8883 7.78093C28.0108 7.5674 28.0758 7.3169 28.0758 7.07055V6.42442C28.7189 6.88175 29.1211 7.63465 29.1211 8.45271V10.0625Z" fill={props.color} /></g></svg>;
export default Chain;