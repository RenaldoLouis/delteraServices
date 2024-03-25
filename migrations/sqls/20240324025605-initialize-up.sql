-- Table: public.Users

CREATE SEQUENCE users_id_seq;
CREATE TABLE public."users"
(
    id bigint DEFAULT nextval('users_id_seq'::regclass) PRIMARY KEY,
    name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

-- ALTER TABLE public."users"
--     OWNER to postgres;