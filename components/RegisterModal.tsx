"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SchoolIcon from "@mui/icons-material/School";
import { addUser, setActiveUser } from "../app/api/data";

type Props = {
    open: boolean;
    onCloseAction: () => void;
    onSwitchAction: () => void;
};

export default function RegisterModal({ open, onCloseAction, onSwitchAction }: Props) {
    const router = useRouter();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!fullname.trim() || !email.trim() || !password.trim()) {
            setError("Barcha maydonlar to'ldirilishi kerak!");
            return;
        }

        const newUser = {
            fullname: fullname.trim(),
            email: email.trim(),
            password,
            age: Number(age) || 18,
        };

        const result = addUser(newUser);

        if (result.length > 0) {
            setActiveUser(newUser);
            onCloseAction();
            router.push("/profile");
        } else {
            setError("Bu email allaqachon ro'yxatdan o'tgan!");
        }
    };

    return (
        <Dialog open={open} onClose={onCloseAction} fullWidth maxWidth="xs" slotProps={{ paper: { sx: { borderRadius: 4, overflow: "hidden" } } }} >
            <Box sx={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)", px: 3, py: 4, position: "relative", textAlign: "center", }} >
                <IconButton onClick={onCloseAction} sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }}>
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 1.5, }} >
                    <SchoolIcon sx={{ color: "#fff", fontSize: 28 }} />
                </Box>
                <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>
                    Hisob yarating
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: 13, mt: 0.5 }}>
                    Bir necha soniyada ro'yxatdan o'ting
                </Typography>
            </Box>

            <DialogContent sx={{ p: 0 }}>
                <Box component="form" onSubmit={handleRegister} sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}>
                    {error && (
                        <Typography sx={{ color: "red", fontSize: 13, textAlign: "center", fontWeight: 600 }}>
                            {error}
                        </Typography>
                    )}

                    <TextField label="To'liq ism" fullWidth size="small" value={fullname} onChange={(e) => setFullname(e.target.value)} required slotProps={{ input: { startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} />
                    <TextField label="Email" fullWidth size="small" value={email} onChange={(e) => setEmail(e.target.value)} required slotProps={{ input: { startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} />
                    <TextField label="Parol" type="password" fullWidth size="small" value={password} onChange={(e) => setPassword(e.target.value)} required slotProps={{ input: { startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} />
                    <TextField label="Yosh" type="number" fullWidth size="small" value={age} onChange={(e) => setAge(e.target.value)} slotProps={{ input: { inputProps: { min: 1, max: 100 } } }} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} />
                    <Button type="submit" variant="contained" fullWidth sx={{ py: 1.2, borderRadius: 2.5, textTransform: "none", fontWeight: 700, boxShadow: "none", background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)", "&:hover": { opacity: 0.9, boxShadow: "none" }, }} >
                        Ro'yxatdan o'tish
                    </Button>

                    <Divider sx={{ color: "#9CA3AF", fontSize: 13 }}>yoki</Divider>

                    <Button variant="outlined" startIcon={<GoogleIcon sx={{ fontSize: 18 }} />} fullWidth sx={{ py: 1.1, borderRadius: 2.5, textTransform: "none", fontWeight: 600, borderColor: "#E5E7EB", color: "#1E1B4B", "&:hover": { borderColor: "#C7C4F5", bgcolor: "#F5F4FF" }, }} >
                        Google orqali ro'yxatdan o'tish
                    </Button>

                    <Typography sx={{ fontSize: 13, color: "#6B7280", textAlign: "center", mt: 0.5 }}>
                        Hisobingiz bormi?{" "}
                        <Box component="button" type="button" onClick={onSwitchAction} sx={{ color: "#4F46E5", fontWeight: 700, background: "none", border: "none", cursor: "pointer", p: 0 }} >
                            Kirish
                        </Box>
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
}