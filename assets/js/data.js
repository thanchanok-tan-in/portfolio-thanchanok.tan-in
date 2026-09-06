/**
 * Portfolio Bilingual Data Store
 * Thanchanok Tan-in (Data Science & Analytics Intern)
 * Extracted from intern_portfolio-profile-me.md and 1_portfolio_prompt_en.md
 */

const PORTFOLIO_DATA = {
  profile: {
    name: {
      th: "ธัญชนก ตาลอินทร์",
      en: "Thanchanok Tan-in",
      titleTh: "นางสาว ธัญชนก ตาลอินทร์",
      titleEn: "Ms. Thanchanok Tan-in"
    },
    nickname: {
      th: "แบม",
      en: "Bam"
    },
    role: {
      th: "Data Science & Analytics Intern",
      en: "Data Science & Analytics Intern"
    },
    statusBadge: {
      th: "พร้อมเริ่มฝึกงาน (23 พ.ย. 69 – 12 มี.ค. 70 หรือทันที | อย่างน้อย 4 เดือน)",
      en: "Available for Internship (Nov 23, 2026 – Mar 12, 2027 or Immediately | Min 4 Months)"
    },
    internshipPeriod: {
      th: "23 พฤศจิกายน 2569 – 12 มีนาคม 2570 หรือ ทันที (ระยะเวลาอย่างน้อย 4 เดือน)",
      en: "Nov 23, 2026 – Mar 12, 2027 or Immediately (At least 4 months)"
    },
    internshipFormat: {
      th: "On-site / Hybrid (กรุงเทพฯ & ปริมณฑล หรือ สกลนคร)",
      en: "On-site / Hybrid (Bangkok Metropolitan Transit Zones or Sakon Nakhon)"
    },
    targetRoles: {
      th: "Data Science, Data Analyst, BI & EDA Developer",
      en: "Data Science, Data Analyst, BI & EDA Developer"
    },
    headline: {
      th: "นิสิตชั้นปีที่ 4 สาขาวิชาวิทยาการข้อมูล ม.เกษตรศาสตร์ ผู้เชี่ยวชาญด้าน Exploratory Data Analysis (EDA), Business Intelligence (BI Dashboards) และการวิเคราะห์ข้อมูลเชิงทำนาย",
      en: "4th-Year Data Science Undergraduate at Kasetsart University specializing in Exploratory Data Analysis (EDA), Business Intelligence (BI Dashboards), and Predictive Analytics"
    },
    bio: {
      th: "นิสิตวิทยาการข้อมูลชั้นปีที่ 4 (เกรดเฉลี่ยสะสม 3.66) คณะวิทยาศาสตร์และวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วข.สกลนคร มีความมุ่งมั่นและหลงใหลในสายงาน Data Science, Exploratory Data Analysis (EDA) และ Business Intelligence (BI) เชี่ยวชาญการแปลงข้อมูลดิบที่ซับซ้อนให้กลายเป็นข้อมูลเชิงลึกทางธุรกิจ (Actionable Insights) ผ่านการทำ Data Cleansing, Data Modeling, SQL, Python และการสร้าง Interactive Dashboard (Google Looker Studio, Power BI, Tableau) พร้อมประยุกต์ใช้ Machine Learning ในการวิเคราะห์พยากรณ์และจัดกลุ่มข้อมูลเพื่อสนับสนุนการตัดสินใจเชิงกลยุทธ์ พร้อมเรียนรู้และสร้างคุณค่าให้กับองค์กรในตำแหน่ง Data Science & Data Analyst Intern",
      en: "4th-year Data Science undergraduate (GPAX 3.66) at Faculty of Science and Engineering, Kasetsart University (CSC). Strongly driven toward Data Science, Exploratory Data Analysis (EDA), and Business Intelligence (BI). Proven ability to transform complex datasets into high-impact actionable insights through systematic data cleansing, advanced SQL querying, Python statistical analytics, and interactive dashboard engineering (Google Looker Studio, Power BI, Tableau). Adept at deploying Machine Learning algorithms to uncover patterns and empower data-driven decisions as a Data Science & Analytics Intern."
    },
    avatar: "./assets/images/1-pic.jpg",
    avatarFallback: "./1-pic.jpg",
    contact: {
      email: "thanchanok.tan@ku.th",
      phone: "+66 625 393 445",
      phoneDisplay: "062-539-3445",
      linkedin: "https://www.linkedin.com/in/thanchanok-tan-in-464a52362/",
      github: "https://github.com/thanchanok-tan-in",
      jobsdb: "https://th.jobsdb.com/profile/",
      location: {
        th: "กรุงเทพฯ & ปริมณฑล (แนวรถไฟฟ้า BTS/MRT) / สกลนคร / ทั่วประเทศ (Hybrid/Remote)",
        en: "Bangkok & Metro (BTS/MRT Transit Lines) / Sakon Nakhon / Nationwide (Hybrid/Remote)"
      }
    },
    stats: [
      {
        value: "3.66",
        label: { th: "GPAX สะสม (ปี 4)", en: "Cumulative GPAX" },
        subtext: { th: "สาขาวิชาวิทยาการข้อมูล", en: "Data Science Major" }
      },
      {
        value: "1st",
        label: { th: "งานวิจัยระดับนานาชาติ", en: "International Paper" },
        subtext: { th: "ICSTI-MJU 2026 (เหรียญทองแดง)", en: "ICSTI-MJU 2026 Bronze Medal" }
      },
      {
        value: "2nd",
        label: { th: "รองชนะเลิศอันดับ 2", en: "2nd Runner-up Award" },
        subtext: { th: "ENGiHack 2026 (BDI & THackle)", en: "ENGiHack 2026 Energy Hackathon" }
      },
      {
        value: "4",
        label: { th: "โปรเจกต์ Data & BI", en: "Data & BI Projects" },
        subtext: { th: "ML, Looker Studio, Power BI", en: "ML, Looker Studio, Power BI" }
      }
    ]
  },

  education: {
    university: {
      th: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร",
      en: "Kasetsart University, Chalermphrakiat Sakon Nakhon Province Campus"
    },
    faculty: {
      th: "คณะวิทยาศาสตร์และวิศวกรรมศาสตร์",
      en: "Faculty of Science and Engineering"
    },
    department: {
      th: "ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ",
      en: "Department of Computer Science and Information"
    },
    major: {
      th: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการข้อมูล (Data Science)",
      en: "Bachelor of Science in Data Science (B.Sc. Data Science)"
    },
    yearLevel: {
      th: "นิสิตชั้นปีที่ 4 (คาดว่าจะสำเร็จการศึกษา พ.ศ. 2570)",
      en: "Senior Undergraduate (Expected Graduation: 2027)"
    },
    period: {
      th: "2566 – ปัจจุบัน (2023 – Present)",
      en: "2023 – Present (Expected: 2027)"
    },
    gpax: "3.66",
    relevantCourses: [
      { th: "Exploratory Data Analysis & Statistics (การวิเคราะห์ข้อมูลเชิงสำรวจ)", en: "Exploratory Data Analysis & Applied Statistics" },
      { th: "Business Intelligence & Data Visualization (ธุรกิจอัจฉริยะ)", en: "Business Intelligence & Data Visualization" },
      { th: "Machine Learning for Data Science (การเรียนรู้ของเครื่อง)", en: "Machine Learning for Data Science" },
      { th: "Data Mining & Knowledge Discovery (การทำเหมืองข้อมูล)", en: "Data Mining & Knowledge Discovery" },
      { th: "Database Systems & SQL Design (ระบบฐานข้อมูลและ SQL)", en: "Database Systems & SQL Design" },
      { th: "Data Warehousing & Data Pipelines", en: "Data Warehousing & Data Pipelines" },
      { th: "Probability & Applied Statistics (ความน่าจะเป็นและสถิติ)", en: "Probability & Applied Statistics" },
      { th: "Data Structures & Algorithms (โครงสร้างข้อมูลและอัลกอริทึม)", en: "Data Structures & Algorithms" }
    ]
  },

  // Academic Transcript Details
  transcript: {
    pdfUrl: "./assets/docs/1_Transcript Eng-Thai.pdf",
    title: {
      th: "ใบแสดงผลการเรียนระดับปริญญาตรี (Academic Transcript)",
      en: "Official Undergraduate Academic Transcript Summary"
    },
    studentInfo: {
      nameTh: "นางสาว ธัญชนก ตาลอินทร์",
      nameEn: "Ms. Thanchanok Tan-in",
      universityTh: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร",
      universityEn: "Kasetsart University, Chalermphrakiat Sakon Nakhon Province Campus",
      facultyTh: "คณะวิทยาศาสตร์และวิศวกรรมศาสตร์",
      facultyEn: "Faculty of Science and Engineering",
      departmentTh: "ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ",
      departmentEn: "Department of Computer Science and Information",
      programTh: "หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการข้อมูล",
      programEn: "Bachelor of Science in Data Science (B.Sc. Data Science)",
      statusTh: "นิสิตชั้นปีที่ 4 (กำลังศึกษา)",
      statusEn: "4th-Year Undergraduate Senior",
      gpax: "3.66",
      creditsEarned: "105+ หน่วยกิต",
      creditsEarnedEn: "105+ Credits Completed",
      admittedYear: "2566 (2023)",
      expectedGraduation: "2570 (2027)"
    },
    domains: [
      {
        domainTitle: {
          th: "กลุ่มวิชาวิทยาการข้อมูลและการวิเคราะห์ (Data Science & Analytics)",
          en: "Data Science & Advanced Analytics Domain"
        },
        courses: [
          { code: "02541331", nameTh: "การวิเคราะห์ข้อมูลเชิงสำรวจและการทำเหมืองข้อมูล (EDA & Data Mining)", nameEn: "Exploratory Data Analysis & Data Mining", credits: 3, grade: "A" },
          { code: "02541332", nameTh: "ธุรกิจอัจฉริยะและการแสดงผลข้อมูล (Business Intelligence & Data Viz)", nameEn: "Business Intelligence & Data Visualization", credits: 3, grade: "A" },
          { code: "02541341", nameTh: "การเรียนรู้ของเครื่องสำหรับวิทยาการข้อมูล (Machine Learning for Data Science)", nameEn: "Machine Learning for Data Science", credits: 3, grade: "A" },
          { code: "02541211", nameTh: "การโปรแกรมภาษาไพทอนสำหรับการวิเคราะห์ข้อมูล (Python for Data Analytics)", nameEn: "Python Programming for Data Analytics", credits: 3, grade: "A" },
          { code: "02541345", nameTh: "การจัดการข้อมูลขนาดใหญ่และคลังข้อมูล (Big Data & Data Warehousing)", nameEn: "Big Data Management & Warehousing", credits: 3, grade: "B+" }
        ]
      },
      {
        domainTitle: {
          th: "กลุ่มวิชาสถิติศาสตร์และคณิตศาสตร์ประยุกต์ (Mathematics & Applied Statistics)",
          en: "Applied Statistics & Mathematics Domain"
        },
        courses: [
          { code: "02541221", nameTh: "ความน่าจะเป็นและสถิติประยุกต์ (Probability & Applied Statistics)", nameEn: "Probability & Applied Statistics", credits: 3, grade: "A" },
          { code: "02541222", nameTh: "วิธีการทางสถิติสำหรับการวิจัยข้อมูล (Statistical Methods for Data)", nameEn: "Statistical Methods for Data Research", credits: 3, grade: "A" },
          { code: "02143101", nameTh: "แคลคูลัสและพีชคณิตเชิงเส้น (Calculus & Linear Algebra)", nameEn: "Calculus & Linear Algebra", credits: 3, grade: "B+" }
        ]
      },
      {
        domainTitle: {
          th: "กลุ่มวิชาระบบฐานข้อมูลและวิศวกรรมซอฟต์แวร์ (Database Systems & Software)",
          en: "Database Systems & Software Engineering Domain"
        },
        courses: [
          { code: "02541212", nameTh: "ระบบการจัดการฐานข้อมูลและการออกแบบ SQL (Database Systems & SQL)", nameEn: "Database Systems & SQL Design", credits: 3, grade: "A" },
          { code: "02541213", nameTh: "โครงสร้างข้อมูลและขั้นตอนวิธี (Data Structures & Algorithms)", nameEn: "Data Structures & Algorithms", credits: 3, grade: "B+" },
          { code: "02541351", nameTh: "การพัฒนาเว็บแอปพลิเคชันและการเชื่อมต่อข้อมูล (Web App & Data Connect)", nameEn: "Web Application & Data Connect", credits: 3, grade: "A" }
        ]
      }
    ]
  },

  skills: [
    {
      id: "prog-db",
      category: {
        th: "ภาษาโปรแกรมมิ่ง & ฐานข้อมูล",
        en: "Programming & Query Languages"
      },
      shortTitle: {
        th: "ภาษาโปรแกรมมิ่ง & ฐานข้อมูล",
        en: "Programming & Query Languages"
      },
      badge: {
        th: "Languages & DB",
        en: "Languages & DB"
      },
      summary: {
        th: "เชี่ยวชาญการใช้ Python, SQL, R และ PHP ในการจัดการ ดึงข้อมูล ทำ Data Wrangling และออกแบบ Relational Database Schema",
        en: "Expertise in Python, SQL, R, and PHP for data wrangling, advanced querying, statistical modeling, and relational database schema design."
      },
      icon: "code-2",
      keyTools: ["Python", "SQL / MySQL", "R Language", "PHP", "Pandas & NumPy"],
      items: [
        {
          id: "python",
          name: "Python for Data Science",
          tag: "Core Analytics",
          icon: "code-2",
          summary: {
            th: "ภาษาหลักในการทำ Data Wrangling, Exploratory Data Analysis (EDA), Data Preprocessing, Feature Engineering และ Machine Learning Modeling",
            en: "Primary programming language for Data Wrangling, Exploratory Data Analysis (EDA), Feature Engineering, and Machine Learning modeling."
          },
          useCases: [
            { th: "ทำ Exploratory Data Analysis (EDA) ด้วย Pandas & NumPy เพื่อวิเคราะห์แนวโน้มและ Outliers", en: "Executed extensive Exploratory Data Analysis (EDA) with Pandas & NumPy detecting trends and anomalies." },
            { th: "สร้าง Data Cleaning & Preprocessing Pipeline สำหรับข้อมูลดิบขนาดใหญ่", en: "Engineered automated data cleaning & preprocessing pipelines for raw enterprise datasets." },
            { th: "พัฒนาโมเดล Machine Learning จำแนกกลุ่มและพยากรณ์ข้อมูลด้วย Scikit-Learn", en: "Trained and benchmarked classification and regression predictive models with Scikit-Learn." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics", "Thailand Petroleum Price TRACKER", "ICSTI-MJU Research"]
        },
        {
          id: "sql",
          name: "SQL & Relational Databases",
          tag: "Data Extraction",
          icon: "database",
          summary: {
            th: "เขียนคำสั่ง SQL ขั้นสูง (Subqueries, Window Functions, Aggregate Functions, Complex Joins) เพื่อดึงข้อมูล จัดการ Schema และสร้าง View สำหรับ BI",
            en: "Authored advanced SQL queries (Subqueries, Window Functions, Complex Joins) to extract, transform, and feed relational datasets into BI dashboards."
          },
          useCases: [
            { th: "ออกแบบ Data Architecture และสร้างความสัมพันธ์เชิงตรรกะของตารางฐานข้อมูล", en: "Designed relational schema normalization and data integrity constraints." },
            { th: "เขียน Complex SQL Queries สรุปผลตัวชี้วัดบุคลากรและงบประมาณ", en: "Authored multi-table aggregate queries calculating administrative KPIs and budget burn rates." },
            { th: "สร้าง Data View เพื่อป้อนข้อมูลให้ Looker Studio และ Power BI แบบอัตโนมัติ", en: "Constructed transformed data views feeding real-time BI reporting layers." }
          ],
          relatedProjects: ["Administrative Personnel & KPI Executive Intelligence Dashboard", "Thailand Petroleum Price TRACKER"]
        },
        {
          id: "r-lang",
          name: "R Programming",
          tag: "Statistical Analysis",
          icon: "line-chart",
          summary: {
            th: "ประยุกต์ใช้ R และ RStudio ในการทดสอบสมมติฐานทางสถิติ (Hypothesis Testing), ANOVA, Regression Analysis และการพล็อตภาพข้อมูลขั้นสูงด้วย ggplot2",
            en: "Utilized R and RStudio for statistical hypothesis testing, ANOVA, linear/logistic regressions, and high-impact data visualization via ggplot2."
          },
          useCases: [
            { th: "การทดสอบนัยสำคัญทางสถิติและการวิเคราะห์การถดถอย", en: "Conducted statistical significance tests, p-value calculations, and linear regression models." },
            { th: "พล็อตภาพข้อมูลตัวแปรพหุ (Multivariate Visualization) ด้วย ggplot2", en: "Generated multivariate exploratory visualization plots and distribution diagnostics." }
          ],
          relatedProjects: ["ICSTI-MJU Research", "Academic Statistical Analytics"]
        },
        {
          id: "php-backend",
          name: "PHP & Database Connect",
          tag: "Backend Integration",
          icon: "server",
          summary: {
            th: "เชื่อมต่อฐานข้อมูล MySQL ประมวลผลข้อมูลฝั่งเซิร์ฟเวอร์ และสร้าง API สำหรับส่งผ่านชุดข้อมูลไปยังระบบรายงานผล",
            en: "Server-side data handling, MySQL database connectivity, and lightweight API endpoints for tabular data transmission."
          },
          useCases: [
            { th: "การจัดการฐานข้อมูล MySQL ผ่าน phpMyAdmin และ XAMPP", en: "Local MySQL database administration and schema migrations via phpMyAdmin." },
            { th: "การพัฒนาฟอร์มรับและตรวจสอบความถูกต้องของข้อมูลก่อนจัดเก็บ", en: "Server-side data validation pipelines ensuring clean inputs before database persistence." }
          ],
          relatedProjects: ["Thailand Petroleum Price TRACKER", "Local Stack Testing"]
        }
      ]
    },
    {
      id: "bi-viz",
      category: {
        th: "BI & Advanced Analytics",
        en: "Business Intelligence & Advanced Analytics"
      },
      shortTitle: {
        th: "BI & Advanced Analytics",
        en: "Business Intelligence & Advanced Analytics"
      },
      badge: {
        th: "Executive BI",
        en: "Executive BI"
      },
      summary: {
        th: "สร้าง Interactive Executive Dashboards และ Data Storytelling ด้วย Looker Studio, Power BI, Tableau และ Excel ขั้นสูง",
        en: "Engineering interactive executive dashboards, Star Schema data models, DAX measures, and data storytelling using Looker Studio, Power BI, Tableau, and Advanced Excel."
      },
      icon: "bar-chart-3",
      keyTools: ["Looker Studio", "Power BI", "Tableau", "Advanced Excel", "DAX & Star Schema"],
      items: [
        {
          id: "looker-studio",
          name: "Google Looker Studio",
          tag: "Executive BI",
          icon: "bar-chart-3",
          summary: {
            th: "เครื่องมือหลักที่นำไปใช้สร้าง Dashboard จริงในสำนักงานเลขานุการ คณะศิลปศาสตร์และวิทยาการจัดการ มก. วข.สกลนคร เพื่อติดตามบุคลากรและการใช้งบประมาณแบบ Real-time",
            en: "Core tool deployed in live production for the Faculty of Liberal Arts and Management Science, building real-time executive KPI dashboards tracking personnel promotions and budget burn rates."
          },
          useCases: [
            { th: "ออกแบบ Interactive Executive Dashboards พร้อมระบบตัวกรองหลายมิติ", en: "Designed interactive executive dashboards with multi-tier drill-down filters." },
            { th: "เชื่อมต่อข้อมูลสดแบบ Real-time เข้ากับ Google Sheets ที่ผ่าน Data Cleansing", en: "Configured live synchronization with validated and standardized Google Sheets sources." },
            { th: "สร้างตัวชี้วัด KPI สรุปผลการดำเนินงานเทียบเป้าหมาย (Actual vs. Target)", en: "Formulated dynamic KPI scorecards comparing actual vs. target budget utilization." }
          ],
          relatedProjects: ["Administrative Personnel & KPI Executive Intelligence Dashboard"]
        },
        {
          id: "power-bi",
          name: "Microsoft Power BI",
          tag: "Business Intelligence",
          icon: "layout-dashboard",
          summary: {
            th: "สร้างแบบจำลองข้อมูล Star Schema, เขียนสูตร DAX ขั้นสูงสำหรับวัด MoM Growth, Year-to-Date และออกแบบ Interactive Visualizations",
            en: "Constructed dimensional Star Schema data models, authored advanced DAX measures for Year-to-Date / MoM metrics, and created interactive drill-through reports."
          },
          useCases: [
            { th: "การสร้างโมเดลความสัมพันธ์ของตาราง Fact & Dimension", en: "Built relational Star Schema connections between transactional Fact tables and Dimensions." },
            { th: "การเขียนคำนวณ DAX ขั้นสูงสำหรับวัดการเติบโตและสัดส่วนยอดขาย", en: "Authored complex DAX measures for cumulative performance, time intelligence, and percentages." },
            { th: "การทำ Data Visualization Matrix และ Drill-through Analysis", en: "Implemented data visualization matrices and interactive drill-through reports for stakeholder analytics." }
          ],
          relatedProjects: ["Administrative Personnel & KPI Executive Intelligence Dashboard", "Thailand Petroleum Price TRACKER"]
        },
        {
          id: "tableau",
          name: "Tableau Desktop & Public",
          tag: "Visual Analytics",
          icon: "pie-chart",
          summary: {
            th: "สร้าง Storytelling ผ่านภาพข้อมูล การใช้ Calculated Fields, Parameter Controls และ Dual-Axis Charts เพื่อสื่อสาร Insight เชิงธุรกิจอย่างทรงพลัง",
            en: "Crafting data storytelling through interactive stories, calculated fields, dynamic parameters, and dual-axis visualizations for impactful business presentations."
          },
          useCases: [
            { th: "การสร้าง Visual Data Storytelling เพื่อนำเสนอผู้บริหาร", en: "Created interactive data stories for clear executive decision support." },
            { th: "Geographical Heatmaps และ Cohort Analysis แสดงพฤติกรรมผู้บริโภค", en: "Designed geographical heatmaps and visual analytics curves." }
          ],
          relatedProjects: ["Thailand Petroleum Price TRACKER", "Coursework BI Dashboards"]
        },
        {
          id: "excel-adv",
          name: "Microsoft Excel (Advanced)",
          tag: "Data Processing",
          icon: "sheet",
          summary: {
            th: "การประมวลผลข้อมูลระดับมืออาชีพด้วย PivotTable, PivotChart, XLOOKUP, INDEX/MATCH, Dynamic Arrays และการตรวจสอบ Data Validation",
            en: "Professional data manipulation leveraging PivotTables, PivotCharts, XLOOKUP, nested INDEX/MATCH, Dynamic Arrays, and robust Data Validation rules."
          },
          useCases: [
            { th: "การทำความสะอาดและตรวจสอบความถูกต้องของข้อมูล (Data Cleansing & Validation)", en: "Conducted rigorous data cleaning, duplicate stripping, and error audits." },
            { th: "การสร้างแบบจำลองทางการเงินและการกระทบยอดงบประมาณ", en: "Built financial tracking templates comparing actuals vs. planned budget allocations." },
            { th: "การจัดทำชุดข้อมูลพร้อมใช้สำหรับส่งต่อให้ระบบ BI", en: "Standardized tabular schemas for downstream ingestion into Looker Studio & Power BI." }
          ],
          relatedProjects: ["Administrative Personnel & KPI Executive Intelligence Dashboard"]
        }
      ]
    },
    {
      id: "ml-mining",
      category: {
        th: "Machine Learning & Data Mining",
        en: "Machine Learning & Data Mining"
      },
      shortTitle: {
        th: "Machine Learning & Data Mining",
        en: "Machine Learning & Data Mining"
      },
      badge: {
        th: "Predictive Analytics",
        en: "Predictive Analytics"
      },
      summary: {
        th: "การทำ Exploratory Data Analysis (EDA), Feature Engineering, Predictive Modeling และ Data Mining ด้วย Scikit-Learn และ Orange",
        en: "Comprehensive Exploratory Data Analysis (EDA), Feature Engineering, Machine Learning classification/regression, and Visual Data Mining."
      },
      icon: "cpu",
      keyTools: ["Exploratory Data Analysis", "Scikit-Learn", "Orange Mining", "ETL Pipelines"],
      items: [
        {
          id: "eda-analytics",
          name: "Exploratory Data Analysis (EDA)",
          tag: "Core Specialty",
          icon: "search",
          summary: {
            th: "ทักษะหลักในการสำรวจโครงสร้างข้อมูล การค้นพบแนวโน้ม (Trend Analysis), การหาค่าผิดปกติ (Anomaly Detection), และการตรวจสอบสหสัมพันธ์ (Correlation)",
            en: "Core specialty in auditing dataset schemas, uncovering latent trends, identifying anomalous outliers, and analyzing feature correlations to formulate actionable business hypotheses."
          },
          useCases: [
            { th: "การวิเคราะห์สถิติเชิงพรรณนาและตรวจจับความผิดปกติของชุดข้อมูล", en: "Conducted statistical profiling, missing value treatment, and outlier detection." },
            { th: "Correlation Heatmaps และ Feature Selection สำหรับเตรียมโมเดล", en: "Analyzed correlation matrices to isolate high-impact features for predictive modeling." },
            { th: "การสรุปประเด็นเชิงธุรกิจเพื่อนำไปสร้างกลยุทธ์ขององค์กร", en: "Synthesized exploratory analytical findings into clear actionable executive briefings." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics", "Administrative Personnel & KPI Executive Intelligence Dashboard"]
        },
        {
          id: "scikit-learn",
          name: "Scikit-Learn & Predictive ML",
          tag: "Predictive Analytics",
          icon: "cpu",
          summary: {
            th: "การประยุกต์ใช้อัลกอริทึม Machine Learning สำหรับงาน Classification, Regression และ Clustering เช่น Random Forest, Decision Tree, Logistic Regression",
            en: "Applied Machine Learning algorithms for classification, regression, and clustering including Random Forest, Decision Trees, Logistic Regression, and K-Means."
          },
          useCases: [
            { th: "การทำ Feature Engineering, Normalization และ Cross-Validation", en: "Feature scaling, categorical encoding, and robust stratified K-Fold cross-validation." },
            { th: "การประเมินประสิทธิภาพโมเดลด้วย Confusion Matrix, F1-Score, ROC-AUC", en: "Evaluated models with Precision, Recall, F1-Score, and ROC-AUC curves." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics", "Edge-Native Privacy-Preserving Fall Detection System"]
        },
        {
          id: "orange-mining",
          name: "Orange Data Mining",
          tag: "Visual Modeling",
          icon: "git-branch",
          summary: {
            th: "เครื่องมือ Visual Programming สำหรับทำ Data Preprocessing, Association Rules Mining, Model Comparison และ Hierarchical Clustering",
            en: "Visual data science platform utilized for rapid data preprocessing, association rule discovery, multi-model benchmarking, and hierarchical clustering."
          },
          useCases: [
            { th: "การเปรียบเทียบผลการทำนายของโมเดลหลายตัวพร้อมกัน (Model Benchmarking)", en: "Benchmarked candidate classifiers simultaneously on classification accuracy and F1." },
            { th: "การจัดกลุ่มข้อมูลด้วย K-Means และ Hierarchical Clustering", en: "Unsupervised clustering workflows identifying natural sub-cohorts." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics", "ICSTI-MJU Research"]
        },
        {
          id: "etl-pipelines",
          name: "Data Cleansing & ETL Pipelines",
          tag: "Data Quality",
          icon: "refresh-cw",
          summary: {
            th: "กระบวนการ Extract, Transform, Load ข้อมูลจากหลายแหล่ง วางระเบียบข้อบังคับความถูกต้อง (Validation Rules) และรักษาคุณภาพข้อมูล 100%",
            en: "End-to-end Extract, Transform, Load workflows aggregating disparate records, applying rigorous validation rules, and maintaining 100% data integrity."
          },
          useCases: [
            { th: "การตรวจสอบและแก้ไขข้อมูลสูญหาย ข้อมูลซ้ำซ้อน และ Schema Validation", en: "Automated handling of missing values, record deduplication, and schema validation." },
            { th: "การทำ Data Dictionary และคู่มือส่งมอบข้อมูลมาตรฐานแก่ทีม", en: "Authored comprehensive Data Dictionaries and pipeline documentation." }
          ],
          relatedProjects: ["Administrative Personnel & KPI Executive Intelligence Dashboard", "Thailand Petroleum Price TRACKER"]
        }
      ]
    },
    {
      id: "web-apps",
      category: {
        th: "เว็บแอปพลิเคชันข้อมูล & Frameworks",
        en: "Web Data Apps & Interactive Frameworks"
      },
      shortTitle: {
        th: "เว็บแอปพลิเคชัน & Frameworks",
        en: "Web Data Apps & Interactive Frameworks"
      },
      badge: {
        th: "Web & Analytics Apps",
        en: "Web & Analytics Apps"
      },
      summary: {
        th: "การพัฒนาเว็บแอปพลิเคชันวิเคราะห์ข้อมูลแบบ Interactive ด้วย Streamlit, PHP, Leaflet.js (GIS) และ Chart.js",
        en: "Engineering interactive data web applications and spatial GIS analytics dashboards using Streamlit, PHP, Leaflet.js, and Chart.js."
      },
      icon: "globe",
      keyTools: ["Streamlit", "Leaflet.js (GIS)", "Chart.js", "REST API", "HTML5 & Tailwind"],
      items: [
        {
          id: "streamlit",
          name: "Streamlit Web Analytics",
          tag: "Interactive Data Apps",
          icon: "globe",
          summary: {
            th: "สร้างเว็บแอปพลิเคชัน Interactive Data Dashboard ด้วย Python ล้วนอย่างรวดเร็ว ให้ผู้ใช้ปรับพารามิเตอร์และดูผลวิเคราะห์ข้อมูล/ทำนายโมเดลแบบ Real-time",
            en: "Rapidly engineered interactive Python web applications enabling stakeholders to explore data, tweak parameters, and view live ML analytics dynamically."
          },
          useCases: [
            { th: "สร้างแดชบอร์ดจำลองผลการประหยัดพลังงานในงาน ENGiHack 2026", en: "Deployed energy savings simulator web app during the 48-hour ENGiHack 2026 hackathon." },
            { th: "สร้าง Interactive Calculator สำหรับจำลองผลการวิเคราะห์ข้อมูลและพารามิเตอร์", en: "Engineered interactive analytics calculator web app with real-time parameter sliders." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics"]
        },
        {
          id: "leaflet-gis",
          name: "Leaflet.js & Spatial GIS Analytics",
          tag: "Spatial Web Mapping",
          icon: "map-pin",
          summary: {
            th: "การประยุกต์ใช้ Leaflet.js และ GeoJSON สำหรับสร้างแผนที่ความร้อนเชิงพื้นที่ (Spatial Choropleth Map) แสดงผลราคาน้ำมันและข้อมูลภูมิศาสตร์ 77 จังหวัดทั่วไทย",
            en: "Utilized Leaflet.js GIS libraries and GeoJSON spatial boundary layers to engineer interactive nationwide 77-province petroleum price choropleth maps."
          },
          useCases: [
            { th: "สร้าง Interactive Spatial Map แสดงราคาน้ำมัน 8 ประเภทรายจังหวัดทั่วประเทศ", en: "Engineered interactive spatial choropleth maps displaying retail prices for 8 fuel types across 77 provinces." },
            { th: "ทำ GeoJSON Boundary Integration เพื่อจำแนกส่วนต่างราคาน้ำมันตามเขตภูมิภาค", en: "Integrated provincial GeoJSON boundary geometries calculating 30-day regional price spreads." }
          ],
          relatedProjects: ["Thailand Petroleum Price TRACKER"]
        },
        {
          id: "chart-js",
          name: "Chart.js & Data Viz Libraries",
          tag: "Interactive Charting",
          icon: "bar-chart-2",
          summary: {
            th: "การใช้ Chart.js สร้างกราฟแนวโน้ม กราฟแท่งเปรียบเทียบ และ Interactive Drill-down Visualizations บนเว็บแอปพลิเคชัน",
            en: "Implemented Chart.js frontend visualization suites to render dynamic daily/monthly price trendlines, distributor comparison bar charts, and drill-down metrics."
          },
          useCases: [
            { th: "สร้าง Daily & Monthly Price Trend Line Charts บนเว็บราคาน้ำมัน", en: "Rendered interactive daily and monthly fuel price movement line charts with responsive tooltips." },
            { th: "สร้าง Bar Charts เปรียบเทียบราคาสถานีบริการ PTT และบางจาก", en: "Built side-by-side distributor price comparison bar charts." }
          ],
          relatedProjects: ["Thailand Petroleum Price TRACKER"]
        }
      ]
    },
    {
      id: "tools-env",
      category: {
        th: "เครื่องมือและสภาพแวดล้อม",
        en: "Development Tools & Environments"
      },
      shortTitle: {
        th: "เครื่องมือและสภาพแวดล้อม",
        en: "Development Tools & Environments"
      },
      badge: {
        th: "Dev Stack",
        en: "Dev Stack"
      },
      summary: {
        th: "สภาพแวดล้อมการทำงานแบบครบวงจร ได้แก่ VS Code, Jupyter, Git/GitHub, XAMPP (MySQL) และการทำ Presentation นำเสนอผลงาน",
        en: "Full-stack development and data environments including VS Code, Jupyter, Git/GitHub, XAMPP (MySQL), and executive communication tools."
      },
      icon: "terminal",
      keyTools: ["VS Code", "Jupyter / Colab", "Git & GitHub", "XAMPP / MySQL", "Canva & PPT"],
      items: [
        {
          id: "dev-tools",
          name: "VS Code, RStudio & Jupyter",
          tag: "Development Suite",
          icon: "terminal",
          summary: {
            th: "สภาพแวดล้อมการทำงานหลักสำหรับการเขียนโค้ดวิเคราะห์ข้อมูล การสร้าง Notebook สำหรับงานวิจัย และการจัดการ Virtual Environment ด้วย Anaconda",
            en: "Primary development environments for data analytics, interactive exploratory notebooks, and environment management with Anaconda."
          },
          useCases: [
            { th: "Jupyter Notebook & Google Colab สำหรับการทำ EDA และวิจัยข้อมูล", en: "Exploratory research workflows and data analysis notebook documentation." },
            { th: "VS Code สำหรับการเขียนแอปพลิเคชันและการควบคุมเวอร์ชันด้วย Git", en: "Clean modular coding and version-controlled collaborative development." }
          ],
          relatedProjects: ["All Data Projects"]
        },
        {
          id: "git-github",
          name: "Git, GitHub & Collaboration",
          tag: "Version Control",
          icon: "git-pull-request",
          summary: {
            th: "การควบคุมเวอร์ชันของโค้ดโปรเจกต์ การทำงานร่วมกันในทีมผ่าน Branching, Pull Requests และการจัดเก็บโค้ดวิเคราะห์ข้อมูลอย่างเป็นระบบบน GitHub",
            en: "Version control for analytical codebase, cross-functional collaboration via branching and Pull Requests, and public portfolio archiving on GitHub."
          },
          useCases: [
            { th: "การจัดการ Branch, Commit และ Merge โค้ดอย่างมีแบบแผน", en: "Structured Git workflow, commit conventions, and repository maintenance." },
            { th: "การเผยแพร่โปรเจกต์ Open-Source และผลงาน Data Science", en: "Publishing reproducible data science experiments and repositories." }
          ],
          relatedProjects: ["All Active Projects", "GitHub Portfolio"]
        },
        {
          id: "xampp-mysql",
          name: "XAMPP & MySQL Database Server",
          tag: "Local DB Server",
          icon: "database",
          summary: {
            th: "การจำลอง Web & Database Server ด้วย XAMPP สำหรับบริหารจัดการฐานข้อมูล MySQL ผ่าน phpMyAdmin และทดสอบระบบแบบ Local Environment",
            en: "Local web and relational database server environment using XAMPP for managing MySQL databases via phpMyAdmin and local stack integration testing."
          },
          useCases: [
            { th: "บริหารจัดการฐานข้อมูล Relational Database และเขียน SQL Queries ทดสอบใน phpMyAdmin", en: "Administered relational database schemas and tested complex SQL queries in phpMyAdmin." },
            { th: "จำลอง Local Web Server และเชื่อมต่อ PHP Backend เข้ากับฐานข้อมูล MySQL", en: "Configured local Apache server and tested PHP-to-MySQL data connectivity pipelines." }
          ],
          relatedProjects: ["Thailand Petroleum Price TRACKER", "Local Data Architecture Projects"]
        },
        {
          id: "productivity-bi",
          name: "Canva & Executive Presentations",
          tag: "Data Storytelling",
          icon: "presentation",
          summary: {
            th: "การแปลงข้อมูลเชิงลึก (Data Insights) ให้กลายเป็นการนำเสนอที่เข้าใจง่าย สวยงาม และน่าประทับใจสำหรับผู้บริหารและทีมงานผ่าน Canva, PowerPoint และ Teams",
            en: "Translating statistical insights into visually compelling, executive-ready presentations and infographic briefings via Canva and PowerPoint."
          },
          useCases: [
            { th: "การออกแบบ Slide Pitching และ Infographic สรุป Insight ข้อมูล", en: "Executive pitch deck creation and infographic data summaries for stakeholders." },
            { th: "การนำเสนอผลงานในเวทีการแข่งขัน Hackathon และงานประชุมวิชาการ", en: "Stage presentation materials for hackathon sprints and academic conferences." }
          ],
          relatedProjects: ["ENGiHack 2026 Energy Analytics", "ICSTI-MJU 2026 Presentation"]
        }
      ]
    }
  ],

  workExperience: [
    {
      id: "la-ms-analyst",
      role: {
        th: "Data Analyst (Freelance / Project-based)",
        en: "Data Analyst (Freelance / Project-based)"
      },
      organization: {
        th: "สำนักงานเลขานุการ คณะศิลปศาสตร์และวิทยาการจัดการ มหาวิทยาลัยเกษตรศาสตร์ วข.สกลนคร",
        en: "Office of the Secretary, Faculty of Liberal Arts and Management Science, Kasetsart University CSC"
      },
      period: {
        th: "5 สิงหาคม 2569 – 2 กันยายน 2569",
        en: "August 5, 2026 – September 2, 2026"
      },
      type: {
        th: "งานวิเคราะห์ข้อมูลตามโครงการ (Project-based Freelance)",
        en: "Project-based Freelance"
      },
      summary: {
        th: "รับผิดชอบการออกแบบโครงสร้างฐานข้อมูล ทำความสะอาดข้อมูล และพัฒนา Interactive Dashboard เพื่อติดตามบุคลากรและการใช้งบประมาณ KPI แบบ Real-time",
        en: "Led relational database architecture restructuring, validation automation, and executive interactive dashboard development for administrative personnel and KPI monitoring."
      },
      highlights: [
        {
          title: {
            th: "การออกแบบและปรับปรุงโครงสร้างฐานข้อมูล (Data Architecture & Cleansing)",
            en: "Data Architecture & Cleansing"
          },
          detail: {
            th: "ออกแบบ Data Schema เพื่อรวบรวมข้อมูลบุคลากร ตำแหน่งทางราชการ KPI งบประมาณ และเอกสารหนังสือเรียนเชิญอย่างเป็นระบบ พร้อมทำ Data Cleansing & Validation ลดความซ้ำซ้อนและรักษามาตรฐานข้อมูล 100%",
            en: "Engineered robust data schemas in Google Sheets to integrate personnel records, promotion filings, official invitation letters, and KPI benchmarks with systematic validation eliminating record redundancy."
          }
        },
        {
          title: {
            th: "พัฒนา Interactive Dashboard ด้วย Google Looker Studio",
            en: "Interactive Dashboard via Google Looker Studio"
          },
          detail: {
            th: "เชื่อมต่อข้อมูลแบบ Real-time เข้ากับ Looker Studio เพื่อติดตามสถานะบุคลากรและความคืบหน้าการยื่นเอกสารขอตำแหน่งทางราชการ ช่วยให้ฝ่ายบริหารเข้าถึงสถานะงานได้ทันที",
            en: "Connected live Google Sheets data to Google Looker Studio for tracking personnel academic promotion filings in real-time, providing immediate transparency for executive management."
          }
        },
        {
          title: {
            th: "หน้ารายงานสรุปผลภาพรวม KPI และงบประมาณ (Executive Summary)",
            en: "Executive KPI & Budget Tracking Report"
          },
          detail: {
            th: "จัดทำหน้ารายงานสรุปผลแสดงตัวชี้วัด KPI และการใช้งบประมาณจริงเทียบเป้าหมาย (Actual vs. Target) ผ่านฟังก์ชันคำนวณขั้นสูงบน Google Sheets และ Looker Studio",
            en: "Designed executive summary views tracking organizational KPIs and comparing actual expenditures versus planned budgets utilizing advanced automated formulas."
          }
        },
        {
          title: {
            th: "การวางระเบียบและส่งมอบชุดข้อมูลมาตรฐาน (Data Standardization)",
            en: "Data Standardization & Protocol Handover"
          },
          detail: {
            th: "วาง Data Schema และระเบียบการจัดเก็บข้อมูลหนังสือเรียนเชิญ พร้อมจัดทำคู่มือส่งมอบชุดข้อมูลที่พร้อมใช้งานให้ทีมนำไปพัฒนาต่อยอดได้อย่างราบรื่น",
            en: "Established formal data storage protocols, standardized schemas, and documentation for invitation records to ensure seamless cross-departmental continuity."
          }
        }
      ],
      techStack: ["Google Looker Studio", "Google Sheets (Advanced Formulas)", "Data Architecture", "ETL & Validation", "Executive Reporting"]
    }
  ],

  projects: [
    {
      id: "edge-fall-detection",
      category: "ml",
      title: {
        th: "ระบบตรวจจับการล้มแบบ Edge-Native รักษาความเป็นส่วนตัว บนบอร์ด NVIDIA Jetson",
        en: "Edge-Native Privacy-Preserving Fall Detection System on NVIDIA Jetson"
      },
      badge: {
        th: "วิจัยระดับนานาชาติ & Senior Capstone",
        en: "International Research & Senior Capstone"
      },
      awardBadge: {
        th: "🥉 รางวัลเหรียญทองแดง ICSTI-MJU 2026",
        en: "🥉 Bronze Medal Award ICSTI-MJU 2026"
      },
      problem: {
        th: "ระบบตรวจจับการล้มในผู้สูงอายุทั่วไปมักพึ่งพากล้องวงจรปิดแบบบันทึกภาพจริงและส่งข้อมูลขึ้น Cloud ซึ่งสร้างความกังวลเรื่องการละเมิดความเป็นส่วนตัวอย่างรุนแรง และมีความล่าช้าของเครือข่าย (Latency) ในเหตุการณ์ฉุกเฉิน",
        en: "Conventional elder-care camera systems transmit raw video feeds to cloud servers, posing severe privacy violation risks and introducing critical network latency during time-sensitive fall emergencies."
      },
      solution: {
        th: "พัฒนาระบบ Edge-Native ตรวจจับท่าทางการล้มด้วยโมเดลโครงกระดูก (Skeleton-Based Pose Estimation) บนบอร์ดประมวลผล NVIDIA Jetson ทำงานแบบ 100% On-Device ไม่ส่งภาพวิดีโอออกนอกอุปกรณ์ พร้อม Optimize โมเดลด้วย TensorRT ให้ตอบสนองแบบ Real-time",
        en: "Engineered an edge-native fall detection pipeline using skeleton-based keypoint estimation running 100% on-device on NVIDIA Jetson. No raw imagery ever exits the local device, ensuring absolute privacy while delivering 30+ FPS inference via TensorRT optimization."
      },
      metrics: [
        { label: { th: "ความแม่นยำ (Accuracy)", en: "Model Accuracy" }, value: "94.8%" },
        { label: { th: "ความเร็วประมวลผล", en: "Inference Speed" }, value: "30+ FPS" },
        { label: { th: "การรักษาความเป็นส่วนตัว", en: "Privacy Guarantee" }, value: "100% Edge" }
      ],
      techStack: ["NVIDIA Jetson", "Python", "OpenCV", "Pose Estimation", "TensorRT", "Edge AI"],
      links: [
        {
          label: { th: "📄 อ่านบทความวิจัย / Abstract (PDF)", en: "📄 Read Research Abstract (PDF)" },
          url: "https://sciencebase.mju.ac.th/icsti2026/docApdf/ABRL169038.pdf",
          icon: "file-text"
        },
        {
          label: { th: "🏅 ดูเกียรติบัตรรางวัล Bronze Medal (PDF)", en: "🏅 View Certificate (PDF)" },
          url: "https://sciencebase.mju.ac.th/icsti2026/certificate/rewards/ABRL169038.pdf",
          icon: "award"
        },
        {
          label: { th: "🌐 หน้าการประชุมวิชาการ ICSTI 2026", en: "🌐 ICSTI 2026 Portal" },
          url: "https://sciencebase.mju.ac.th/icsti2026/",
          icon: "external-link"
        }
      ]
    },
    {
      id: "looker-faculty-dashboard",
      category: "bi",
      title: {
        th: "แดชบอร์ดบริหารจัดการบุคลากรและติดตามงบประมาณ KPI คณะศิลปศาสตร์ฯ มก. วข.สกลนคร",
        en: "Administrative Personnel & KPI Executive Intelligence Dashboard"
      },
      badge: {
        th: "งานวิเคราะห์จริงระดับองค์กร",
        en: "Institutional Live Analytics"
      },
      awardBadge: {
        th: "⭐ ใช้งานจริงในสำนักงานเลขานุการ คณะฯ",
        en: "⭐ Implemented in Production"
      },
      problem: {
        th: "การติดตามสถานะการขอตำแหน่งทางวิชาการและหนังสือเชิญของบุคลากรเดิมกระทำผ่านเอกสารกระดาษและไฟล์ Excel หลายชุด ทำให้ผู้บริหารขาดมุมมองสรุปผลแบบรวมศูนย์ และใช้เวลาตรวจสอบความถูกต้องสูง",
        en: "Personnel promotion filings, official invitation letters, and divisional budget tracking were historically scattered across physical paperwork and disconnected spreadsheets, preventing leadership from accessing real-time status updates."
      },
      solution: {
        th: "ออกแบบโครงสร้าง Data Schema บน Google Sheets วางระบบ Data Cleansing อัตโนมัติ และสร้าง Interactive Dashboard บน Looker Studio แสดงผลสถานะบุคลากร อัตราความสำเร็จ และการใช้งบประมาณจริงเทียบเป้าหมาย",
        en: "Architected a centralized relational data model in Google Sheets, implemented automated data cleansing pipelines, and deployed high-performance Looker Studio interactive dashboards with multi-tier administrative filters."
      },
      metrics: [
        { label: { th: "ลดเวลาค้นหาและติดตามงาน", en: "Tracking Time Saved" }, value: "65%" },
        { label: { th: "ความถูกต้องของข้อมูล", en: "Data Accuracy" }, value: "100%" },
        { label: { th: "ความถี่ในการอัปเดต", en: "Data Freshness" }, value: "Real-time" }
      ],
      techStack: ["Google Looker Studio", "Google Sheets (Formulas)", "Data Architecture", "ETL Cleansing", "KPI Analytics"],
      links: [
        {
          label: { th: "💼 ดูรายละเอียดในส่วนประสบการณ์", en: "💼 View Experience Details" },
          url: "#experience",
          icon: "briefcase"
        }
      ]
    },
    {
      id: "engihack-energy-optimization",
      category: "data-mining",
      title: {
        th: "แบบจำลองวิเคราะห์ความผิดปกติและการใช้พลังงานยั่งยืน (ENGiHack 2026)",
        en: "Sustainable Energy Consumption Anomaly & Optimization Engine (ENGiHack 2026)"
      },
      badge: {
        th: "Hackathon Project",
        en: "Hackathon Project"
      },
      awardBadge: {
        th: "🥈 รางวัลรองชนะเลิศอันดับ 2 (ENGiHack 2026)",
        en: "🥈 2nd Runner-up (ENGiHack 2026)"
      },
      problem: {
        th: "การใช้พลังงานไฟฟ้าในอาคารขนาดใหญ่มีความผันผวนสูงและมีช่วงเวลาเกิดการสูญเสียพลังงานโดยไม่จำเป็น ซึ่งหากขาดระบบตรวจจับความผิดปกติแบบอัจฉริยะ จะทำให้องค์กรสูญเสียงบประมาณมหาศาล",
        en: "Intensive energy consumption fluctuations in large facilities generate massive operational waste and carbon emissions without automated intelligence to detect anomalies and optimize peak load patterns."
      },
      solution: {
        th: "ร่วมมือกับสถาบันข้อมูลขนาดใหญ่ (BDI) ผ่านแพลตฟอร์ม THackle นำชุดข้อมูลพลังงานขนาดใหญ่มาวิเคราะห์ สร้างแบบจำลอง Machine Learning จำแนกช่วง Peak-Hour ตรวจจับความผิดปกติ และสร้างเว็บแอปพลิเคชันจำลองการประหยัดพลังงาน",
        en: "Partnered with the Big Data Institute (BDI) on the THackle competition platform, building predictive machine learning models to isolate energy anomalies, model peak usage patterns, and simulate emission-reduction strategies in a 48-hour sprint."
      },
      metrics: [
        { label: { th: "รางวัลการแข่งขัน", en: "Competition Rank" }, value: "2nd Runner-up" },
        { label: { th: "ความร่วมมือองค์กร", en: "Partnership" }, value: "BDI × THackle" },
        { label: { th: "ระยะเวลาพัฒนา", en: "Hackathon Window" }, value: "48 Hours" }
      ],
      techStack: ["Python", "Scikit-Learn", "Pandas", "Orange Data Mining", "Streamlit"],
      links: [
        {
          label: { th: "🏆 ดูข้อมูลรางวัลการแข่งขัน", en: "🏆 View Hackathon Award" },
          url: "#awards",
          icon: "award"
        }
      ]
    },
    {
      id: "thailand-petroleum-tracker",
      category: "bi",
      title: {
        th: "ระบบแดชบอร์ดติดตามและวิเคราะห์ราคาพลังงานและน้ำมันเชื้อเพลิงทั่วประเทศไทย (Thailand Petroleum Price TRACKER)",
        en: "Thailand Nationwide Petroleum Price Tracker & Spatial Analytics Platform (PTT & Bangchak)"
      },
      badge: {
        th: "Full-Stack BI & GIS Spatial Analytics",
        en: "Full-Stack BI & GIS Spatial Analytics"
      },
      awardBadge: {
        th: "⛽ วิเคราะห์ราคาปลีก 8 ประเภทน้ำมัน 77 จังหวัด (PTT × BC)",
        en: "⛽ 8 Fuel Types × 77 Provinces Spatial Analytics"
      },
      problem: {
        th: "ความผันผวนของราคาขายปลีกน้ำมันเชื้อเพลิงและส่วนต่างราคาตามพื้นที่แต่ละจังหวัดทั่วประเทศ รวมถึงการเปรียบเทียบส่วนต่างราคาระหว่างสองผู้ให้บริการหลัก (PTT และบางจาก) ขาดระบบรวบรวมข้อมูลเชิงพื้นที่ (GIS) และการแสดงผลแนวโน้มราคารายวัน/รายเดือนแบบรวมศูนย์ ทำให้ผู้บริโภคและฝ่ายวางแผนโลจิสติกส์ติดตามต้นทุนพลังงานได้ยาก",
        en: "Retail petroleum price volatility across Thailand's 77 provinces and price spreads between major market distributors (PTT vs. Bangchak) lacked centralized spatial GIS intelligence and historical daily/monthly trend monitoring, hindering consumer visibility and enterprise logistics cost optimization."
      },
      solution: {
        th: "พัฒนาแพลตฟอร์ม Interactive Web Analytics แดชบอร์ดด้วย PHP, Leaflet.js, GeoJSON และ Chart.js เพื่อติดตามและวิเคราะห์ราคาน้ำมัน 8 ประเภททั่วประเทศ แสดงผลแผนที่เชิงพื้นที่ระดับ 77 จังหวัด (Spatial Choropleth Map), กราฟแนวโน้มราคารายวัน/รายเดือน (Monthly & Daily Drill-down), ตัวชี้วัดเปรียบเทียบส่วนต่างราคา 30 วัน (30-Day Price Diff) และตารางเปรียบเทียบราคาสถานีบริการ PTT และบางจาก",
        en: "Engineered an interactive spatial web analytics dashboard integrating PHP, Leaflet.js GIS, GeoJSON, and Chart.js to track and visualize retail prices for 8 petroleum types across all 77 provinces in Thailand. Features interactive choropleth geographic heatmaps, monthly/daily trend lines, 30-day price spread KPI metrics, and distributor comparison tables between PTT and Bangchak."
      },
      metrics: [
        { label: { th: "ครอบคลุมพื้นที่", en: "Provinces Covered" }, value: "77 จังหวัด (All Provinces)" },
        { label: { th: "ประเภทน้ำมัน", en: "Petroleum Types" }, value: "8 ชนิด (PTT × BC)" },
        { label: { th: "การวิเคราะห์เชิงพื้นที่", en: "Spatial Features" }, value: "GIS Map & 30-Day Diff" }
      ],
      techStack: ["Leaflet.js (GIS)", "Chart.js", "PHP & MySQL", "GeoJSON", "Spatial Analytics", "Data Pipeline (CSV/JSON)"],
      links: [
        {
          label: { th: "📂 คลังโปรเจกต์ GitHub (Source Code)", en: "📂 Project Repository" },
          url: "https://github.com/thanchanok-tan-in",
          icon: "code"
        }
      ]
    }
  ],

  honorsAndActivities: {
    publications: [
      {
        id: "icsti-2026-paper",
        title: {
          th: "Edge-Native Privacy-Preserving Fall Detection System Using Optimized Skeleton-Based Pose Estimation on NVIDIA Jetson",
          en: "Edge-Native Privacy-Preserving Fall Detection System Using Optimized Skeleton-Based Pose Estimation on NVIDIA Jetson"
        },
        conference: {
          th: "การประชุมวิชาการระดับนานาชาติด้านวิทยาศาสตร์ เทคโนโลยี และนวัตกรรม ครั้งที่ 6 (ICSTI-MJU 2026)",
          en: "The 6th International Conference on Science, Technology & Innovation (ICSTI-MJU 2026)"
        },
        venue: {
          th: "คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ จังหวัดเชียงใหม่",
          en: "Faculty of Science, Maejo University, Chiang Mai, Thailand"
        },
        authors: "Thanchanok Tan-in, Surasak Tangsakul, Atchara Namburi",
        track: "Computer Science & IT (Paper ID: ABRL169038)",
        award: {
          th: "🥉 ได้รับรางวัลเหรียญทองแดง (Bronze Medal Award - Oral Presentation)",
          en: "🥉 Bronze Medal Award Winner (Oral Presentation Session)"
        },
        year: "2026 (พ.ศ. 2569)",
        summary: {
          th: "พัฒนาระบบตรวจจับการล้มแบบ Edge-Native บนบอร์ดประมวลผล NVIDIA Jetson โดยใช้โมเดลโครงกระดูก (Skeleton-Based Pose Estimation) เพื่อรักษาความเป็นส่วนตัวของผู้ใช้งาน ไม่ให้มีภาพหลุดออกนอกอุปกรณ์ พร้อมทำ Optimization โมเดลให้ทำงานแบบ Real-time บนอุปกรณ์ประมวลผลที่มีทรัพยากรจำกัด",
          en: "Engineered an edge-native fall detection system on NVIDIA Jetson hardware utilizing skeleton-based keypoint estimation to maintain total user privacy without exposing raw video feeds, optimized for real-time inference on edge computing devices."
        },
        links: [
          {
            label: { th: "📄 อ่านบทความวิจัย / Abstract (PDF)", en: "📄 Read Research Abstract (PDF)" },
            url: "https://sciencebase.mju.ac.th/icsti2026/docApdf/ABRL169038.pdf"
          },
          {
            label: { th: "🏅 ดูเกียรติบัตรรางวัล Bronze Medal (PDF)", en: "🏅 View Bronze Award Certificate (PDF)" },
            url: "https://sciencebase.mju.ac.th/icsti2026/certificate/rewards/ABRL169038.pdf"
          },
          {
            label: { th: "🌐 หน้ารายละเอียดการประชุม ICSTI 2026", en: "🌐 ICSTI 2026 Official Site" },
            url: "https://sciencebase.mju.ac.th/icsti2026/"
          }
        ]
      }
    ],

    awards: [
      {
        id: "icsti-bronze",
        title: {
          th: "รางวัลเหรียญทองแดง (Bronze Medal Award - Oral Presentation)",
          en: "Bronze Medal Award (Oral Presentation)"
        },
        organization: {
          th: "The 6th International Conference on Science, Technology & Innovation (ICSTI-MJU 2026)",
          en: "The 6th International Conference on Science, Technology & Innovation (ICSTI-MJU 2026)"
        },
        date: {
          th: "พฤษภาคม 2569 (May 2026)",
          en: "May 2026"
        },
        badge: "International Conference Award",
        detail: {
          th: "นำเสนอผลงานวิจัยภาคบรรยาย (Oral Presentation) ชื่องานวิจัย 'Edge-Native Privacy-Preserving Fall Detection System Using Optimized Skeleton-Based Pose Estimation on NVIDIA Jetson' ได้รับการคัดเลือกเป็นผลงานยอดเยี่ยมระดับเหรียญทองแดงในสาขา Computer Science & IT",
          en: "Delivered an oral presentation on 'Edge-Native Privacy-Preserving Fall Detection System Using Optimized Skeleton-Based Pose Estimation on NVIDIA Jetson', earning the Bronze Medal for research excellence in Computer Science & IT."
        },
        pdfLink: "https://sciencebase.mju.ac.th/icsti2026/certificate/rewards/ABRL169038.pdf"
      },
      {
        id: "engihack-3rd",
        title: {
          th: "รางวัลรองชนะเลิศอันดับ 2 (Third Prize Award / 2nd Runner-up)",
          en: "Third Prize Award (2nd Runner-up)"
        },
        organization: {
          th: "ENGiHack 2026: The 1st Energy and Environmental Hackathon (มก. วข.สกลนคร)",
          en: "ENGiHack 2026: The 1st Energy and Environmental Hackathon (KU CSC)"
        },
        date: {
          th: "กรกฎาคม 2569 (July 2026)",
          en: "July 2026"
        },
        badge: "Hackathon Competition",
        detail: {
          th: "ร่วมทีมแข่งขันระดมความคิดและพัฒนาโซลูชันนวัตกรรมเพื่อแก้ปัญหาด้านพลังงานและสิ่งแวดล้อม (Energy & Environmental Sustainability) ภายใต้ความร่วมมือกับสถาบันข้อมูลขนาดใหญ่ (องค์การมหาชน) หรือ BDI และแพลตฟอร์ม THackle",
          en: "Competed in an intensive hackathon sprint creating data-driven solutions for energy and environmental sustainability in partnership with the Big Data Institute (BDI) and THackle platform."
        },
        pdfLink: "./assets/docs/2569_ENGiHack_team-Certificate.pdf"
      }
    ],

    activities: [
      {
        id: "engihack-committee",
        role: {
          th: "คณะทำงานและฝ่ายสนับสนุนด้านเทคนิค (Organizing Committee & Technical Staff)",
          en: "Organizing Committee & Technical Staff"
        },
        event: {
          th: "โครงการแข่งขัน ENGiHack 2026 ร่วมกับ BDI และค่ายแพลตฟอร์ม THackle",
          en: "ENGiHack 2026 with Big Data Institute (BDI) & THackle Platform"
        },
        period: {
          th: "ปี 2569 (2026)",
          en: "2026"
        },
        detail: {
          th: "ดูแลและสนับสนุนด้านเทคนิคแก่ผู้เข้าแข่งขันในการใช้งานโจทย์และชุดข้อมูลบนแพลตฟอร์ม THackle พร้อมประสานงานร่วมกับทีมผู้เชี่ยวชาญจากสถาบันข้อมูลขนาดใหญ่ (BDI) และคณาจารย์เพื่อให้การแข่งขันดำเนินไปอย่างราบรื่น",
          en: "Supported competitors with technical troubleshooting and data pipeline onboarding on the THackle challenge platform, collaborating closely with Big Data Institute (BDI) specialists and university faculty."
        },
        certificateLink: "./assets/docs/2569_Certificate_of_Participant_ENGiHack.pdf"
      },
      {
        id: "hackathon-camp",
        role: {
          th: "ผู้เข้าร่วมโครงการค่ายบ่มเพาะนวัตกรรม (Innovation & Hackathon Camp Participant)",
          en: "Innovation & Hackathon Camp Participant"
        },
        event: {
          th: "การเข้าร่วมงาน KUSE AI Hackathon 2025 26–28 มิถุนายน 2025",
          en: "University Innovation & Hackathon Incubator Camp (2025)"
        },
        period: {
          th: "ปี 2568 (2025)",
          en: "2025"
        },
        detail: {
          th: "ฝึกฝนกระบวนการคิดเชิงออกแบบ (Design Thinking) เปลี่ยนโจทย์ปัญหาจริง (Pain Points) ให้เป็นโครงงานนวัตกรรมต้นแบบ พร้อมฝึกทักษะการทำงานร่วมกันเป็นทีมข้ามสายงาน (Cross-functional Collaboration) และการนำเสนอแบบ Pitching & Storytelling",
          en: "Practiced Design Thinking frameworks, transformed real-world community pain points into working prototypes, honed cross-functional team leadership, and delivered persuasive executive pitches."
        },
        certificateLink: "./assets/docs/2568_KUSE AI Hackathon-Certificate.pdf"
      }
    ]
  },

  ui: {
    themes: {
      devDark: { th: "🛠️ Developer Dark", en: "🛠️ Developer Dark" },
      execDark: { th: "💼 Executive Dark", en: "💼 Executive Dark" },
      analyticLight: { th: "📊 Analytic Light", en: "📊 Analytic Light" }
    },
    nav: {
      brandTitle: { th: "Thanchanok.T", en: "Thanchanok.T" },
      brandSubtitle: { th: "Data Science & BI", en: "Data Science & BI" },
      about: { th: "เกี่ยวกับฉัน", en: "About" },
      education: { th: "การศึกษา", en: "Education" },
      skills: { th: "ทักษะ", en: "Skills" },
      projects: { th: "ผลงานโปรเจกต์", en: "Projects" },
      experience: { th: "ประสบการณ์", en: "Experience" },
      honors: { th: "รางวัลและวิชาการ", en: "Honors & Hub" },
      contact: { th: "ติดต่อ", en: "Contact" },
      downloadResume: { th: "Resume (PDF)", en: "Resume (PDF)" },
      viewTranscript: { th: "ทรานสคริปต์ (Transcript)", en: "Academic Transcript" },
      langSwitch: { th: "English 🇺🇸", en: "ไทย 🇹🇭" }
    },
    hero: {
      badge: { th: "พร้อมเริ่มฝึกงาน (23 พ.ย. 69 – 12 มี.ค. 70 หรือทันที)", en: "Available for Internship 2026-2027" },
      greeting: { th: "สวัสดีค่ะ, ฉันชื่อ", en: "Hello, I am" },
      subGreeting: { th: "(ชื่อเล่น: แบม)", en: "(Nickname: Bam)" },
      roleTag: { th: "นิสิตวิทยาการข้อมูล ชั้นปีที่ 4 | ม.เกษตรศาสตร์", en: "4th-Year Data Science Undergraduate | Kasetsart University" },
      ctaProjects: { th: "ชมผลงานโปรเจกต์", en: "Explore Projects" },
      ctaContact: { th: "ติดต่อฝึกงาน", en: "Contact Me" },
      ctaResume: { th: "เปิด / พิมพ์ Resume (PDF)", en: "View / Print Resume" },
      ctaTranscript: { th: "ทรานสคริปต์ (GPAX 3.66)", en: "Transcript (GPAX 3.66)" },
      targetRoles: { th: "เป้าหมายตำแหน่งฝึกงาน: Data Science, Data Analyst, BI & EDA (On-site / Hybrid)", en: "Target Roles: Data Science, Data Analyst, BI & EDA (On-site / Hybrid)" }
    },
    sections: {
      about: {
        title: { th: "เกี่ยวกับฉัน & ประวัติการศึกษา", en: "About Me & Education" },
        subtitle: { th: "วิสัยทัศน์ในสายงาน Data Science, EDA, BI และเส้นทางการเรียนรู้สู่การเป็น Data Professional", en: "Career Vision in Data Science, EDA & BI, Academic Foundations & Practical Engineering" }
      },
      skills: {
        title: { th: "ทักษะและความเชี่ยวชาญทางเทคนิค", en: "Technical Stack & Interactive Capabilities" },
        subtitle: { th: "คลิกที่การ์ดเพื่อดูรายละเอียดการใช้งานจริงและโปรเจกต์ที่เกี่ยวข้อง (มีระบบเลื่อนสไลด์ ◀ ▶)", en: "Click on any skill card to open the in-depth modal carousel (with ◀ ▶ navigation arrows)" }
      },
      projects: {
        title: { th: "ผลงานโปรเจกต์เด่น", en: "Featured Projects" },
        subtitle: { th: "การประยุกต์ใช้ EDA, Business Intelligence Dashboard และ Machine Learning แก้โจทย์ปัญหาจริง", en: "Real-world engineering from executive Looker Studio BI suites to predictive analytics" },
        filterAll: { th: "ทั้งหมด", en: "All Projects" },
        filterML: { th: "Machine Learning & Predictive", en: "Machine Learning & Predictive" },
        filterBI: { th: "BI & Dashboards", en: "BI & Dashboards" },
        filterMining: { th: "EDA & Data Mining", en: "EDA & Data Mining" }
      },
      experience: {
        title: { th: "ประสบการณ์การทำงาน", en: "Work Experience" },
        subtitle: { th: "การส่งมอบคุณค่าจริงผ่านโครงการวิเคราะห์ข้อมูล โครงสร้างฐานข้อมูล และระบบติดตามองค์กร", en: "Proven impact through organizational data architecture and executive dashboard delivery" }
      },
      honors: {
        title: { th: "รางวัล ผลงานวิจัย & กิจกรรม", en: "Honors, Research & Activities Hub" },
        subtitle: { th: "ผลงานตีพิมพ์ระดับนานาชาติ รางวัลการแข่งขัน และบทบาทการทำงานในค่ายนวัตกรรมข้อมูล", en: "International publications, podium awards, and hackathon leadership milestones" },
        tabPublications: { th: "📚 ผลงานวิจัยระดับนานาชาติ", en: "📚 International Research" },
        tabAwards: { th: "🏆 รางวัลและเกียรติประวัติ", en: "🏆 Honors & Awards" },
        tabActivities: { th: "⚡ กิจกรรม & ค่ายอบรม", en: "⚡ Hackathons & Camps" }
      },
      contact: {
        title: { th: "ติดต่อเพื่อโอกาสร่วมงาน / ฝึกงาน", en: "Let's Connect for Internship" },
        subtitle: { th: "พร้อมเข้าสัมภาษณ์และเริ่มงานฝึกงานทั้งแบบ On-site และ Hybrid", en: "Available for interview and internship onboarding (On-site / Hybrid)" },
        sendBtn: { th: "ส่งข้อความติดต่อ", en: "Send Message" },
        directInfoTitle: { th: "ข้อมูลการติดต่อโดยตรง", en: "Direct Contact Channels" },
        formTitle: { th: "แบบฟอร์มส่งข้อความติดต่อ", en: "Quick Inquiry Form" },
        nameLabel: { th: "ชื่อผู้ติดต่อ / บริษัท", en: "Your Name / Company" },
        emailLabel: { th: "อีเมลสำหรับติดต่อกลับ", en: "Contact Email" },
        subjectLabel: { th: "หัวข้อการติดต่อ", en: "Subject" },
        messageLabel: { th: "รายละเอียดข้อความ / ข้อเสนอการฝึกงาน", en: "Message / Internship Offer" },
        copiedToast: { th: "คัดลอกข้อมูลเรียบร้อยแล้ว!", en: "Copied to clipboard!" }
      }
    },
    footer: {
      copyright: {
        th: "© 2026 นางสาว ธัญชนก ตาลอินทร์. สงวนลิขสิทธิ์.",
        en: "© 2026 Thanchanok Tan-in. All Rights Reserved."
      },
      tagline: {
        th: "มุ่งมั่นสร้างคุณค่าจากข้อมูลด้วย Data Science, EDA และ BI (Built with passion for Data & AI)",
        en: "Empowering decisions through the art and science of Data Science, EDA & BI"
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
