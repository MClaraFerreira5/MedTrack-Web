CREATE TABLE IF NOT EXISTS frequencia_uso
(
    id                   BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
    frequencia_uso_tipo  VARCHAR(255),
    dias_semana          TEXT[],
    uso_continuo         BOOLEAN                                 NOT NULL,
    horarios_especificos JSONB,
    intervalo_horas      INTEGER                                 NOT NULL,
    primeiro_horario     time WITHOUT TIME ZONE,
    data_inicio          date,
    data_termino         date,
    CONSTRAINT pk_frequenciauso PRIMARY KEY (id)
);