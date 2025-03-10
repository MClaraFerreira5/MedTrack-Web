package com.medtrack.medtrack.model.usuario.dto;

import com.medtrack.medtrack.model.usuario.Usuario;

public record DadosUsuarioMobile(

        Long id,
        String nome,
        String nomeUsuario,
        String email
        ) {
    public DadosUsuarioMobile(Usuario usuario) {
        this(usuario.getId(), usuario.getNome(),usuario.getNomeUsuario(), usuario.getEmail());
    }
}
