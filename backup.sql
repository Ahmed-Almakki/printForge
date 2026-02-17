--
-- PostgreSQL database dump
--

\restrict 0a5nsJaL56D7RoxX7WWdM7HTmgE24AVkXhX66c3KP9FAqCwrORDHXmDeFcssrtx

-- Dumped from database version 17.7 (Ubuntu 17.7-0ubuntu0.25.10.1)
-- Dumped by pg_dump version 17.7 (Ubuntu 17.7-0ubuntu0.25.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Account; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."Account" (
    id integer NOT NULL,
    provider text NOT NULL,
    "providerId" text NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    userid integer NOT NULL
);


ALTER TABLE public."Account" OWNER TO ahmed;

--
-- Name: Account_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."Account_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Account_id_seq" OWNER TO ahmed;

--
-- Name: Account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."Account_id_seq" OWNED BY public."Account".id;


--
-- Name: Category; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name_ar text NOT NULL
);


ALTER TABLE public."Category" OWNER TO ahmed;

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Category_id_seq" OWNER TO ahmed;

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    url text NOT NULL,
    width integer NOT NULL,
    height integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    userid integer NOT NULL,
    categoryid integer NOT NULL,
    video_url character varying(200),
    "threeD_model" text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."Product" OWNER TO ahmed;

--
-- Name: ProductInfo; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."ProductInfo" (
    id integer NOT NULL,
    productid integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    likes integer NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "shortDescription" character varying(200) NOT NULL
);


ALTER TABLE public."ProductInfo" OWNER TO ahmed;

--
-- Name: ProductInfo_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."ProductInfo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProductInfo_id_seq" OWNER TO ahmed;

--
-- Name: ProductInfo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."ProductInfo_id_seq" OWNED BY public."ProductInfo".id;


--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO ahmed;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: Tag; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."Tag" (
    id integer NOT NULL,
    name text NOT NULL,
    name_ar text NOT NULL
);


ALTER TABLE public."Tag" OWNER TO ahmed;

--
-- Name: Tag_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."Tag_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Tag_id_seq" OWNER TO ahmed;

--
-- Name: Tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."Tag_id_seq" OWNED BY public."Tag".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Users" OWNER TO ahmed;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: ahmed
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO ahmed;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ahmed
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: _ProductInfoToTag; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public."_ProductInfoToTag" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ProductInfoToTag" OWNER TO ahmed;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: ahmed
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO ahmed;

--
-- Name: Account id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Account" ALTER COLUMN id SET DEFAULT nextval('public."Account_id_seq"'::regclass);


--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: ProductInfo id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."ProductInfo" ALTER COLUMN id SET DEFAULT nextval('public."ProductInfo_id_seq"'::regclass);


--
-- Name: Tag id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Tag" ALTER COLUMN id SET DEFAULT nextval('public."Tag_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."Account" (id, provider, "providerId", "updatedAt", userid) FROM stdin;
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."Category" (id, name, "createdAt", "updatedAt", name_ar) FROM stdin;
1	3D PRINTER	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	طابعة ثلاثية الأبعاد
2	ART	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	فن
3	EDUCATION	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	تعليم
4	FASHION	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	موضة
5	HOBBY & DIY	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	هوايات واصنعها بنفسك
6	HOUSEHOLD	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	الأعمال المنزلية
7	MINIATURES	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	تصغيرات
8	TOOLS	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	أدوات
9	TOYS & GAMES	2026-02-12 17:45:11.292	2026-02-12 17:45:11.292	ألعاب وألعاب ترفيهية
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."Product" (id, url, width, height, "createdAt", "updatedAt", userid, categoryid, video_url, "threeD_model") FROM stdin;
3	f8649aecfe8696cdf22db6f7ca522d3310b95d50.png	800	800	2026-02-12 17:46:13.567	2026-02-12 17:46:13.567	6	3	\N	
4	text.png	800	600	2026-02-14 17:59:24.539	2026-02-14 17:59:24.539	6	4	\N	
\.


--
-- Data for Name: ProductInfo; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."ProductInfo" (id, productid, title, description, likes, "updatedAt", "createdAt", "shortDescription") FROM stdin;
2	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 09:29:26.146	2026-02-13 09:29:26.146	Minimalist 3D printable wall hook.
3	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
4	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
5	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
6	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
7	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
8	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
9	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
10	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
11	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
12	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
13	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
14	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
15	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
16	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
17	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
18	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
19	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
20	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
21	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
22	3	Modern Wall Hook	A strong and durable wall hook designed for FDM printers. Supports up to 5kg weight. Includes STL and STEP files.	1000	2026-02-13 17:54:38.275	2026-02-13 17:54:38.275	Minimalist 3D printable wall hook.
23	4	Default	Default Image to see the performance in good way	500	2026-02-14 18:02:36.865	2026-02-14 18:02:36.865	just a default image
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."Tag" (id, name, name_ar) FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."Users" (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
6	ahmed	ahmed@ahmed.com	1234	2026-02-12 15:12:19.497	2026-02-12 15:12:19.497
\.


--
-- Data for Name: _ProductInfoToTag; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public."_ProductInfoToTag" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: ahmed
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
dc68df3f-e56d-446c-b763-b52fba82cab1	5be3c465bbdade40fe972a1f919299d43de54cec0ec4816d1191b89b0af3bcc8	2026-02-12 13:00:37.296675+02	20260212110037_init	\N	\N	2026-02-12 13:00:37.269475+02	1
bfb765fa-ae00-4c1f-8700-eb76f2c64f2c	208081323c44a7aeae42f44fb9034b7f871e2355f09fe3351c161c93605931b7	2026-02-12 14:42:50.992435+02	20260212124250_init	\N	\N	2026-02-12 14:42:50.970089+02	1
93891546-1c3c-4953-8f87-7150ce98ec5c	9c43588f8fbe5f2cf8df2bb7881c077c1f8974cd67e4344d98110cee775ffbdf	2026-02-12 14:59:06.833691+02	20260212125906_init	\N	\N	2026-02-12 14:59:06.791284+02	1
eef8bcee-aad0-40ef-bcb5-07ab1a6a9b66	ba2dbfe2c8ec4d559dfe4d0838ccd82e0559d589594072da6fcbbcd0211b253a	2026-02-12 15:05:55.37255+02	20260212130555_init	\N	\N	2026-02-12 15:05:55.361434+02	1
3b44b417-95ac-475d-aa74-a48aa1b04b09	c4c13cb1fe071c69dedac389e8149a0a193c83e3866d4efa27efdb5b101ea73b	2026-02-12 15:07:40.43835+02	20260212130740_init	\N	\N	2026-02-12 15:07:40.429391+02	1
c065afd9-4306-4cbe-9d0a-3acef2ef9ddf	5872ed544ca0459136ff2c088178b53a1254741e8ddf6055854a3c10565f1dca	2026-02-12 15:09:29.8814+02	20260212130929_init	\N	\N	2026-02-12 15:09:29.863998+02	1
1e6de139-3ece-4769-b3cb-37d53dccce01	69b0e0770b1c209c5dfbbde5fa7eae78de70bb4d477f7805c0b7400df4f705e6	2026-02-12 15:12:15.475065+02	20260212131215_init	\N	\N	2026-02-12 15:12:15.459536+02	1
c246cc9a-0780-4e90-982f-25484ccf4a5a	e79d68039445817fc846c53391d6845303714776daafd1e17d1135223fdd1f5e	2026-02-12 15:30:20.868694+02	20260212133020_init	\N	\N	2026-02-12 15:30:20.842277+02	1
478151d2-61dc-425c-a94d-0a9c19dbdb2f	c06e31b29fb96d158adff0cc48329c2b3d9c8aa1a16cac419c3caf880daa65e8	2026-02-12 17:38:24.961703+02	20260212153824_init	\N	\N	2026-02-12 17:38:24.927591+02	1
907796db-eee6-4937-bffe-6bd9c3eeedea	5c142c997128e432635eef2a47520ca61cb3621c3ed2050a9202affcac4070b1	2026-02-12 17:44:04.776047+02	20260212154404_init	\N	\N	2026-02-12 17:44:04.768714+02	1
a0a90086-4485-4ef8-a729-fb293360810a	06326157be170fcc94ff0aebaf5452610ae223afa08fe798c5362b207accffb8	2026-02-13 08:50:53.191986+02	20260213065053_init	\N	\N	2026-02-13 08:50:53.157299+02	1
f6212665-8aca-47c2-8999-56c03fc1b0a7	06ae8d3fc93c669f5b9e8dc0d6207ed7a19e2dae62a7f1d507b60bf1df09ef6c	2026-02-13 09:05:42.159003+02	20260213070542_init	\N	\N	2026-02-13 09:05:42.146682+02	1
83fa7820-31e4-493e-8394-3ab41ce3bd63	a63468a95a8a1ee840c65768f6079e5d21f70ccfe912a0f367caf58ca6ca408c	2026-02-15 18:25:51.855423+02	20260215162551_init	\N	\N	2026-02-15 18:25:51.784857+02	1
7bbae68b-0f52-4e99-a009-bfa038068947	8a2846255ab584f5fb738d24786ea555c8bf4f8c604a7444fd7856b8a82898bd	2026-02-15 19:43:05.843338+02	20260215174305_init	\N	\N	2026-02-15 19:43:05.821214+02	1
\.


--
-- Name: Account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."Account_id_seq"', 1, false);


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."Category_id_seq"', 9, true);


--
-- Name: ProductInfo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."ProductInfo_id_seq"', 23, true);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."Product_id_seq"', 4, true);


--
-- Name: Tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."Tag_id_seq"', 1, false);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ahmed
--

SELECT pg_catalog.setval('public."Users_id_seq"', 6, true);


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: ProductInfo ProductInfo_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."ProductInfo"
    ADD CONSTRAINT "ProductInfo_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: Tag Tag_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Tag"
    ADD CONSTRAINT "Tag_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: _ProductInfoToTag _ProductInfoTags_AB_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."_ProductInfoToTag"
    ADD CONSTRAINT "_ProductInfoTags_AB_pkey" PRIMARY KEY ("A", "B");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Account_provider_providerId_key; Type: INDEX; Schema: public; Owner: ahmed
--

CREATE UNIQUE INDEX "Account_provider_providerId_key" ON public."Account" USING btree (provider, "providerId");


--
-- Name: Tag_name_ar_key; Type: INDEX; Schema: public; Owner: ahmed
--

CREATE UNIQUE INDEX "Tag_name_ar_key" ON public."Tag" USING btree (name_ar);


--
-- Name: Tag_name_key; Type: INDEX; Schema: public; Owner: ahmed
--

CREATE UNIQUE INDEX "Tag_name_key" ON public."Tag" USING btree (name);


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: ahmed
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: _ProductInfoTags_B_index; Type: INDEX; Schema: public; Owner: ahmed
--

CREATE INDEX "_ProductInfoTags_B_index" ON public."_ProductInfoToTag" USING btree ("B");


--
-- Name: Account Account_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_userid_fkey" FOREIGN KEY (userid) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductInfo ProductInfo_productid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."ProductInfo"
    ADD CONSTRAINT "ProductInfo_productid_fkey" FOREIGN KEY (productid) REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_categoryid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_categoryid_fkey" FOREIGN KEY (categoryid) REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_userid_fkey" FOREIGN KEY (userid) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _ProductInfoToTag _ProductInfoTags_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."_ProductInfoToTag"
    ADD CONSTRAINT "_ProductInfoTags_A_fkey" FOREIGN KEY ("A") REFERENCES public."ProductInfo"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductInfoToTag _ProductInfoTags_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ahmed
--

ALTER TABLE ONLY public."_ProductInfoToTag"
    ADD CONSTRAINT "_ProductInfoTags_B_fkey" FOREIGN KEY ("B") REFERENCES public."Tag"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict 0a5nsJaL56D7RoxX7WWdM7HTmgE24AVkXhX66c3KP9FAqCwrORDHXmDeFcssrtx

