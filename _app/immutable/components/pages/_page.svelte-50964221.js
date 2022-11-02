import{S as q,i as U,s as K,k as w,q as V,a as P,l as S,m as C,r as E,h as g,c as T,n as v,b,F as y,u as z,B as L,K as H,T as N,U as Q,V as Y,f as M,d as X,t as J,w as Z,x as $,y as ee,z as te,g as ae}from"../../chunks/index-181a51cc.js";function W(s,e,a){const i=s.slice();return i[5]=e[a],i[7]=a,i}function O(s,e,a){const i=s.slice();return i[8]=e[a],i[7]=a,i}function B(s){let e,a=s[8]+"",i;return{c(){e=w("div"),this.h()},l(c){e=S(c,"DIV",{id:!0});var r=C(e);r.forEach(g),this.h()},h(){v(e,"id",i=s[0]+"-description-"+s[7])},m(c,r){b(c,e,r),e.innerHTML=a},p(c,r){r&8&&a!==(a=c[8]+"")&&(e.innerHTML=a),r&1&&i!==(i=c[0]+"-description-"+c[7])&&v(e,"id",i)},d(c){c&&g(e)}}}function F(s){let e,a,i=s[5]+"",c,r;return{c(){e=w("li"),a=new N(!1),c=P(),this.h()},l(d){e=S(d,"LI",{class:!0,id:!0});var p=C(e);a=Q(p,!1),c=T(p),p.forEach(g),this.h()},h(){a.a=c,v(e,"class","mb-1 ml-8"),v(e,"id",r=s[0]+"-detail-"+s[7])},m(d,p){b(d,e,p),a.m(i,e),y(e,c)},p(d,p){p&16&&i!==(i=d[5]+"")&&a.p(i),p&1&&r!==(r=d[0]+"-detail-"+d[7])&&v(e,"id",r)},d(d){d&&g(e)}}}function ie(s){let e,a,i,c,r,d,p,m,A,_,u,k=s[3],t=[];for(let n=0;n<k.length;n+=1)t[n]=B(O(s,k,n));let h=s[4],o=[];for(let n=0;n<h.length;n+=1)o[n]=F(W(s,h,n));return{c(){e=w("div"),a=w("div"),i=V(s[1]),r=P(),d=w("div"),p=V(s[2]),A=P();for(let n=0;n<t.length;n+=1)t[n].c();_=P(),u=w("ul");for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=S(n,"DIV",{class:!0});var f=C(e);a=S(f,"DIV",{class:!0,id:!0});var l=C(a);i=E(l,s[1]),l.forEach(g),r=T(f),d=S(f,"DIV",{class:!0,id:!0});var D=C(d);p=E(D,s[2]),D.forEach(g),A=T(f);for(let I=0;I<t.length;I+=1)t[I].l(f);_=T(f),u=S(f,"UL",{class:!0});var x=C(u);for(let I=0;I<o.length;I+=1)o[I].l(x);x.forEach(g),f.forEach(g),this.h()},h(){v(a,"class","role-item svelte-1y04bvr"),v(a,"id",c=s[0]+"-title"),v(d,"class","role-item svelte-1y04bvr"),v(d,"id",m=s[0]+"-company"),v(u,"class","role-details svelte-1y04bvr"),v(e,"class","mb-6 w-1/2")},m(n,f){b(n,e,f),y(e,a),y(a,i),y(e,r),y(e,d),y(d,p),y(e,A);for(let l=0;l<t.length;l+=1)t[l].m(e,null);y(e,_),y(e,u);for(let l=0;l<o.length;l+=1)o[l].m(u,null)},p(n,[f]){if(f&2&&z(i,n[1]),f&1&&c!==(c=n[0]+"-title")&&v(a,"id",c),f&4&&z(p,n[2]),f&1&&m!==(m=n[0]+"-company")&&v(d,"id",m),f&9){k=n[3];let l;for(l=0;l<k.length;l+=1){const D=O(n,k,l);t[l]?t[l].p(D,f):(t[l]=B(D),t[l].c(),t[l].m(e,_))}for(;l<t.length;l+=1)t[l].d(1);t.length=k.length}if(f&17){h=n[4];let l;for(l=0;l<h.length;l+=1){const D=W(n,h,l);o[l]?o[l].p(D,f):(o[l]=F(D),o[l].c(),o[l].m(u,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=h.length}},i:L,o:L,d(n){n&&g(e),H(t,n),H(o,n)}}}function ne(s,e,a){let{prefix:i,title:c,company:r,descriptions:d,details:p}=e;return s.$$set=m=>{"prefix"in m&&a(0,i=m.prefix),"title"in m&&a(1,c=m.title),"company"in m&&a(2,r=m.company),"descriptions"in m&&a(3,d=m.descriptions),"details"in m&&a(4,p=m.details)},[i,c,r,d,p]}class le extends q{constructor(e){super(),U(this,e,ne,ie,K,{prefix:0,title:1,company:2,descriptions:3,details:4})}}const G=[{prefix:"az",title:"Principal Industry Specialist, Privacy",company:"Amazon",descriptions:["Joined the Amazon Privacy team to help lead and drive the automation and optimization of their worldwide Privacy Compliance efforts by implementing, executing, and monitoring Privacy by Design principles, policies and practices."],details:["Worked with software development teams, financial teams, legal teams, and privacy and security specialists across Amazon to define and build automated solutions using both internal and external tools and technologies.","The key technical partner in successfully achieving the CDO Privacy 2021 S-Team (highest level leadership) goal to perform privacy reviews on 600+ high priority services and onboard them to our DSAR and Deletion systems.","Focused on automation and scalability of privacy auditing and compliance testing tools and their integration with existing security and privacy systems handling DSAR and Data Deletion requests.","Built the infrastructure and a framework for the automated preparation and distribution of code reviews for privacy-related issues using the AWS CDK and open source and commercial tools such as CodeGuru and PMD.","Drove privacy and security policy adoption measurement and monitoring, roadmap coordination and integration across multiple development teams, risk assessment, gap analysis, and remediation planning.","Trained and mentored both internal and contract hires on Amazon privacy and security tools, processes and practices."]},{prefix:"ch",title:"Vice President of Software Engineering",company:"Code Healer Group",descriptions:["Returned to Code Healer Group to provide expert software architecture, development, security, management, and leadership consulting services to its clients.","Key client contracts:","<ul style='list-style-type: disc;' class='mb-2'><li class='mb-1 ml-8'>Hospital for Special Surgery, New York, NY, USA. <b><a href='https://www.hss.edu'>www.hss.edu</a></b><br>U.S. #1 in orthopedics 11 years in a row.</li><li class='mb-1 ml-8'>Whole Foods Market, Austin, TX, USA. <b><a href='https://www.wholefoodsmarket.com'>www.wholefoodsmarket.com</a></b><br>The world\u2019s leader in natural and organic foods.</li><li class='mb-1 ml-8'>Paradigm, Madison, WI, USA. <b><a href='https://www.myparadigm.com'>www.myparadigm.com</a></b><br>Leading technology and services provider for the building products industry.</li></ul>","General activities:"],details:["Leading and participating in the implementation of local and cloud-based DevOps infrastructure using automation and virtualization tools such as Ansible, CloudFormation, Consul, DataDog, Docker, Jenkins, Packer, Portainer, Terraform, Vagrant, Vault, VirtualBox, and VMware.","Architecting and building Hybrid High Availability Multi-Tier applications in Scala, Java, C#, Python and JavaScript deployed to AWS Fargate, EC2 and RDS instances, Glue and Lambda jobs, KMS, S3, Secrets Manager, and other AWS services using CloudFormation templates, PowerShell, and the AWS CLI.","Driving architecture and participating in the implementation of enhanced security policies and practices across Cloud-based applications and systems.","Leading and participating in the implementation of Agile and Scrum driven practices using tools such as GitLab, Atlassian Jira and Confluence for project management, and Jenkins for continuous integration and automated testing and deployment.","Consulting with customers and partners on Cloud Migration and Multi-Cloud strategies and implementing Agile, DevSecOps, Infrastructure as Code (IaC), PaaS, SaaS, and IaaS principles for the AWS, Azure and GCP platforms."]},{prefix:"ta",title:"Chief Technology Officer (CTO)",company:"TASCET",descriptions:["Led and drove the strategic technical direction and architectural vision of the company. Responsible for the design and implementation of the TASCET identity resolution infrastructure, as well as solutions delivery and technology operations management."],details:["Built the company\u2019s mobile, enterprise strength, FIPS and HIPAA compliant, secure, scalable, cloud based software solution and overseeing its deployment in vertical markets such as healthcare, banking and retail.","Managed and mentored the technical team coding applications in Java, Objective C, Spring, Python, JavaScript, CSS and HTML to run on Apache Tomcat servers and MySQL / MariaDB / SQL Server databases in Docker containers on CentOS servers in Amazon AWS VPC clouds.","Implemented comprehensive DevOps-based infrastructure using automation and virtualization tools such as Ansible, Chef, Docker, Jenkins, Kubernetes, Packer, Puppet, Vagrant, VirtualBox, and VMware.","Led the implementation of Agile Development and Deployment practices and tools, enabling rapid development of feature requests, frequent high quality deliverables and high customer satisfaction."]}];function R(s,e,a){const i=s.slice();return i[0]=e[a].prefix,i[1]=e[a].title,i[2]=e[a].company,i[3]=e[a].descriptions,i[4]=e[a].details,i}function j(s){let e,a,i,c;return a=new le({props:{prefix:s[0],title:s[1],company:s[2],descriptions:s[3],details:s[4]}}),{c(){e=w("div"),Z(a.$$.fragment),i=P(),this.h()},l(r){e=S(r,"DIV",{class:!0});var d=C(e);$(a.$$.fragment,d),i=T(d),d.forEach(g),this.h()},h(){v(e,"class","flex flex-row items-center justify-center gap-4")},m(r,d){b(r,e,d),ee(a,e,null),y(e,i),c=!0},p:L,i(r){c||(M(a.$$.fragment,r),c=!0)},o(r){J(a.$$.fragment,r),c=!1},d(r){r&&g(e),te(a)}}}function oe(s){let e,a,i,c,r,d,p,m,A,_=G,u=[];for(let t=0;t<_.length;t+=1)u[t]=j(R(s,_,t));const k=t=>J(u[t],1,1,()=>{u[t]=null});return{c(){e=P(),a=w("h1"),i=V("Jud Cole Portfolio"),c=P(),r=w("p"),d=V("If you like this site, please consider giving me a job!"),p=P(),m=w("div");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){Y("svelte-1nk4m9d",document.head).forEach(g),e=T(t),a=S(t,"H1",{class:!0});var o=C(a);i=E(o,"Jud Cole Portfolio"),o.forEach(g),c=T(t),r=S(t,"P",{class:!0});var n=C(r);d=E(n,"If you like this site, please consider giving me a job!"),n.forEach(g),p=T(t),m=S(t,"DIV",{class:!0});var f=C(m);for(let l=0;l<u.length;l+=1)u[l].l(f);f.forEach(g),this.h()},h(){document.title="Jud Cole Portfolio",v(a,"class","mb-1 mt-8 text-center text-4xl font-bold"),v(r,"class","mb-6 text-center text-neutral-300"),v(m,"class","text-xl")},m(t,h){b(t,e,h),b(t,a,h),y(a,i),b(t,c,h),b(t,r,h),y(r,d),b(t,p,h),b(t,m,h);for(let o=0;o<u.length;o+=1)u[o].m(m,null);A=!0},p(t,[h]){if(h&0){_=G;let o;for(o=0;o<_.length;o+=1){const n=R(t,_,o);u[o]?(u[o].p(n,h),M(u[o],1)):(u[o]=j(n),u[o].c(),M(u[o],1),u[o].m(m,null))}for(ae(),o=_.length;o<u.length;o+=1)k(o);X()}},i(t){if(!A){for(let h=0;h<_.length;h+=1)M(u[h]);A=!0}},o(t){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)J(u[h]);A=!1},d(t){t&&g(e),t&&g(a),t&&g(c),t&&g(r),t&&g(p),t&&g(m),H(u,t)}}}class re extends q{constructor(e){super(),U(this,e,null,oe,K,{})}}export{re as default};
