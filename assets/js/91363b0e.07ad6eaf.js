"use strict";(self.webpackChunkdocumentation_template=self.webpackChunkdocumentation_template||[]).push([[5504],{8698:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(4848),i=t(8453);const r={},s="6. Runtime View",o={id:"RuntimeView/index",title:"6. Runtime View",description:"Contents",source:"@site/docs/06_RuntimeView/index.md",sourceDirName:"06_RuntimeView",slug:"/RuntimeView/",permalink:"/documentation-template/docs/RuntimeView/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06_RuntimeView/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Block View Level 3",permalink:"/documentation-template/docs/BuildingBlockView/Level3/"},next:{title:"7. DeploymentView",permalink:"/documentation-template/docs/DeploymentView/"}},c={},d=[{value:"Diagrams",id:"diagrams",level:3}];function l(e){const n={a:"a",h1:"h1",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"6-runtime-view",children:"6. Runtime View"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Contents"})}),"\n",(0,a.jsx)(n.p,{children:"The runtime view describes concrete behavior and interactions of the\nsystem's building blocks in form of scenarios from the following areas:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"important use cases or features: how do building blocks execute\nthem?"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"interactions at critical external interfaces: how do building blocks\ncooperate with users and neighboring systems?"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"operation and administration: launch, start-up, stop"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"error and exception scenarios"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"diagrams",children:"Diagrams"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docusaurus.io/docs/next/markdown-features/diagrams",children:"https://docusaurus.io/docs/next/markdown-features/diagrams"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://mermaid.js.org/intro/getting-started.html",children:"https://mermaid.js.org/intro/getting-started.html"})}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n  A --\x3e B;\n  B --\x3e A;"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.mermaid,{value:"graph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Sequence Diagrams"})}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    participant C as Charlie\n    \n    A->>B: Hello Bob, how are you?\n    B->>A: I am good, thanks!\n    A->>C: Hi Charlie, what about you?\n    C--\x3e>A: I am doing great!"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"With Error Handling"})}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    participant C as Charlie\n    \n    A->>B: Request data\n    B->>C: Fetch data from service\n    C--\x3e>B: Data retrieved successfully\n    B--\x3e>A: Here is the data\n\n    alt Data not available\n        C--\x3e>B: Error: Data not found\n        B--\x3e>A: Sorry, data not available\n    end\n\n    A->>C: Thanks!"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"With lifetime bars"})}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant A as Alice\n    participant B as Bob\n    participant C as Charlie\n    \n    A->>B: Request data\n    activate B\n    \n    B->>C: Fetch data from service\n    activate C\n    \n    alt Successful data retrieval\n        C--\x3e>B: Data retrieved successfully\n        B--\x3e>A: Here is the data\n    else Data not available\n        C--\x3e>B: Error: Data not found\n        B--\x3e>A: Sorry, data not available\n    end\n    deactivate C\n    \n    B--\x3e>A: Process completed\n    deactivate B\n\n    A->>C: Thank you!"}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Complex Sequence"})}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant A as ServiceA\n    participant B as ServiceB\n    participant C as ServiceC\n\n    A->>B: Request data from ServiceB\n    activate B\n    \n    B->>C: Fetch data from ServiceC\n    activate C\n    C--\x3e>B: Data retrieved successfully\n    deactivate C\n\n    alt Data not available in ServiceC\n        C--\x3e>B: Error: Data not found\n        B--\x3e>A: Error: ServiceC data not available\n    else Data available\n        B--\x3e>A: Here is the data from ServiceC\n    end\n    deactivate B\n    \n    alt ServiceA needs to process data\n        A->>A: Processing data internally\n        activate A\n        A--\x3e>A: Data processed\n        deactivate A\n    else ServiceA passes data to ServiceB\n        A->>B: Forwarding data to ServiceB\n        activate B\n        B--\x3e>A: Data processed by ServiceB\n        deactivate B\n    end\n    \n    A->>C: Notify ServiceC about completion\n    activate C\n    C--\x3e>A: Acknowledged\n    deactivate C\n"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);