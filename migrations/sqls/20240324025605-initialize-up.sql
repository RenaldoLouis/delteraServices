-- Table: public.Users

CREATE TABLE public."users"
(
    id bigint,
    name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

-- ALTER TABLE public."users"
--     OWNER to postgres;