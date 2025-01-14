package org.ApeBodima.webApp_backend.config.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.ApeBodima.webApp_backend.Utill.JwtUtill;
import org.ApeBodima.webApp_backend.service.JwtService.JwtService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtUtill jwtUtill;
    private final JwtService jwtService;
    public JwtFilter(JwtUtill jwtUtill, JwtService jwtService) {
        this.jwtUtill = jwtUtill;
        this.jwtService = jwtService;
    }
    private String token=null;
    private String username=null;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            username=jwtUtill.extractUserName(token);
        }
        try{
            if(username !=null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails userDetails=jwtService.loadUserByUsername(username);
                if(jwtUtill.validateToken(token,userDetails)){
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
                else{
                    throw new RuntimeException("Invalid token");
                }
            }
            filterChain.doFilter(request, response);
        }
        catch(RuntimeException e){
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("unauthorized "+ e.getMessage() );
                response.getWriter().flush();
        }

    }
}
