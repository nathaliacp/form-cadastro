import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Paper, TextField, Button } from "@mui/material";

import "./register.css";

function Register(){

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string()
        .required("Nome obrigatório")
        .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Deve conter apenas letras"),

        email: yup.string()
        .required("Email obrigatório")
        .email("Email inválido"),

        password: yup.string()
        .required("Senha obrigatória")
        .min(8, "Deve ter no mínimo 8 caracteres")
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
        "Deve conter no mínimo uma letra maiúscula, um número e um caractere especial"),

        confirmPassword: yup.string()
        .required("Confirmação obrigatória")
        .oneOf([yup.ref("password")], "Senhas não correspondem")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitFunction = (data) => {
        history.push(`/${data.name}`)
    }

    return(
        <main>
            <Paper elevation={3} sx={{alignItens: "unset"}}>

                <h1>Cadastre-se</h1>

                <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>

                    <TextField
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        label="Nome"
                        variant="standard"
                        {...register("name")}
                    />

                    <TextField
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        label="Email"
                        variant="standard"
                        {...register("email")}
                    />

                     <TextField
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                        label="Senha"
                        variant="standard"
                        {...register("password")}
                        type="password"
                    /> 

                    <TextField
                        error={!!errors.confirmPassword}
                        helperText={errors?.confirmPassword?.message}
                        label="Confirmar Senha"
                        variant="standard"
                        {...register("confirmPassword")}
                        type="password"
                    /> 

                    <Button type="submit" variant="outlined" size="large">
                            Cadastrar
                    </Button>
                </form>

            </Paper>
        </main>
    )
}

export default Register;