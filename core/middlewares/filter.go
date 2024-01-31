package middlewares

import (
	"fmt"
	"log/slog"
	"net/http"
	"regexp"
	"strings"

	js "github.com/lflxp/lflxp-music/core/middlewares/jwt/services"

	"github.com/gin-gonic/gin"
	"github.com/lflxp/tools/httpclient"
)

func TokenFilter() gin.HandlerFunc {
	return func(c *gin.Context) {
		// token := jwt.ExtractClaims(c)
		// log.Debug("ExtractClaims token ", token)

		if !isWhilteUrl(c) {
			user, err := js.ParseJWTToken(c)
			if err != nil {
				if strings.Contains(err.Error(), "named cookie not present") {
					c.Redirect(http.StatusFound, "/login?url="+c.Request.RequestURI)
					c.Abort()
					// httpclient.SendErrorMessage(c, http.StatusUnauthorized, "token invalid", "/music/#/login?url="+c.Request.RequestURI)
					return
				}
				c.AbortWithStatusJSON(http.StatusUnauthorized, httpclient.Result{
					Success:      false,
					Data:         "Token is not vaild!",
					ErrorCode:    "tokenError",
					ErrorMessage: err.Error(),
					Host:         c.Request.Host,
					TraceId:      "",
					ShowType:     "filter",
				})
				return
			}

			c.Request.Header.Set("username", user.Username)
			c.Request.Header.Set("name", user.Name)
			c.Request.Header.Set("userid", user.UserId)
			c.Request.Header.Set("email", user.Email)
			c.Request.Header.Set("token", user.Token)
			c.Request.Header.Set("refreshtoken", user.RefreshToken)
		} else {
			c.Next()
		}
	}
}

// `^/api/*`, // for debug only
// `^/ws/*`,
func isWhilteUrl(c *gin.Context) bool {
	var rs bool
	url := []string{
		`^/$`,
		`^/swagger/*`,
		// `^/api/*`,
		`^/admin/login`,
		`^/adminfs/*`,
		`^/music/*`,
		`^/playlist/*`,
		`/favicon.ico`,
		`^/lyric/*`,
		`^/song/*`,
		`^/search/*`,
		`^/comment/*`,
		`^/personalized/*`,
		`^/toplist/*`,
		`^/login/*`,
		`^/auth/*`,
	}

	for _, x := range url {
		rs, _ = regexp.MatchString(x, c.Request.URL.Path)
		if rs {
			break
		}
	}

	slog.Debug(fmt.Sprintf("method [%s] isWhite %v path %s Url.Path %s ", c.Request.Method, rs, c.Request.RequestURI, c.Request.URL.Path))
	return rs
}
