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
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import SchoolIcon from "@mui/icons-material/School";
import { findUserByEmailAndPassword, setActiveUser } from "../app/api/data";

type Props = {
    open: boolean;
    onCloseAction: () => void;
    onSwitchAction: () => void;
};

export default function LoginModal({ open, onCloseAction, onSwitchAction }: Props) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        setTimeout(() => {
            const user = findUserByEmailAndPassword(email, password);

            if (user) {
                setActiveUser(user);
                alert("Muvaffaqiyatli kirdingiz!");
                setLoading(false);
                onCloseAction();
                router.push("/profile");
            } else {
                setError("Email yoki parol xato!");
                setLoading(false);
            }
        }, 800);
    };

    return (
        <Dialog open={open} onClose={onCloseAction} fullWidth maxWidth="xs" slotProps={{ paper: { sx: { borderRadius: 4, overflow: "hidden" } } }} >
            <Box sx={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)", px: 3, py: 2, position: "relative", textAlign: "center", }} >
                <IconButton onClick={onCloseAction} sx={{ position: "absolute", right: 8, top: 8, color: "#fff" }} disabled={loading}>
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: 40, height: 40, borderRadius: 3, bgcolor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 1.5, }} >
                    <SchoolIcon sx={{ color: "#fff", fontSize: 28 }} />
                </Box>
                <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>
                    Xush kelibsiz
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: 13, mt: 0.5 }}>
                    Hisobingizga kirib, o'qishni davom eting
                </Typography>
            </Box>

            <DialogContent sx={{ p: 0 }}>
                <Box 
                    component="form" 
                    onSubmit={handleLogin} 
                    sx={{ display: "flex", flexDirection: "column", gap: 2, p: 3 }}
                >
                    {error && (
                        <Typography sx={{ color: "red", fontSize: 13, textAlign: "center", fontWeight: 600 }}>
                            {error}
                        </Typography>
                    )}

                    <TextField 
                        label="Email" 
                        fullWidth 
                        size="small" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                        slotProps={{ input: { startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} 
                    />
                    
                    <TextField 
                        label="Parol" 
                        type="password" 
                        fullWidth 
                        size="small" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        slotProps={{ input: { startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon sx={{ color: "#9CA3AF", fontSize: 20 }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2.5 } }} 
                    />

                    <Button 
                        type="submit"
                        variant="contained" 
                        fullWidth 
                        disabled={loading}
                        sx={{ py: 1.2, borderRadius: 2.5, textTransform: "none", fontWeight: 700, boxShadow: "none", background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)", "&:hover": { opacity: 0.9, boxShadow: "none" }, }} 
                    >
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: "#fff" }} />
                        ) : (
                            "Kirish"
                        )}
                    </Button>

                    <Divider sx={{ color: "#9CA3AF", fontSize: 13 }}>yoki</Divider>

                    <Button disabled={loading} variant="outlined" startIcon={<GoogleIcon sx={{ fontSize: 18 }} />} fullWidth sx={{ py: 1.1, borderRadius: 2.5, textTransform: "none", fontWeight: 600, borderColor: "#E5E7EB", color: "#1E1B4B", "&:hover": { borderColor: "#C7C4F5", bgcolor: "#F5F4FF" }, }} >
                        Google orqali kirish
                    </Button>

                    <Typography sx={{ fontSize: 13, color: "#6B7280", textAlign: "center", mt: 0.5 }}>
                        Hisobingiz yo'qmi?{" "}
                        <Box component="button" type="button" disabled={loading} onClick={onSwitchAction} sx={{ color: "#4F46E5", fontWeight: 700, background: "none", border: "none", cursor: "pointer", p: 0 }} >
                            Ro'yxatdan o'tish
                        </Box>
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    );
}